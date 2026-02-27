import re
from urllib.parse import urlparse

import httpx
from bs4 import BeautifulSoup

MAX_CONTENT_CHARS = 240_000
DEFAULT_TIMEOUT_SECONDS = 20.0


class ScrapingError(Exception):
    """Raised when URL scraping fails."""


def sanitize_url(url: str) -> str:
    clean = (url or "").strip()
    parsed = urlparse(clean)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise ScrapingError("Invalid URL. Use a full http/https address.")
    return clean


def extract_visible_text(html: str) -> str:
    soup = BeautifulSoup(html, "html.parser")

    for tag_name in ("script", "style", "noscript", "iframe", "svg"):
        for node in soup.find_all(tag_name):
            node.decompose()

    text = soup.get_text(separator="\n")
    text = re.sub(r"\n{3,}", "\n\n", text)
    text = re.sub(r"[ \t]+", " ", text)
    return text.strip()


async def scrape_url(url: str, timeout_seconds: float = DEFAULT_TIMEOUT_SECONDS) -> dict:
    target_url = sanitize_url(url)

    try:
        async with httpx.AsyncClient(
            timeout=httpx.Timeout(timeout_seconds),
            follow_redirects=True,
            headers={"User-Agent": "AskMyNotesBot/1.0 (+https://askmynotes.local)"},
        ) as client:
            response = await client.get(target_url)
            response.raise_for_status()
    except httpx.HTTPError as exc:
        # Development fallback: some local environments fail certificate chain validation.
        error_text = str(exc).lower()
        if "certificate_verify_failed" in error_text:
            try:
                async with httpx.AsyncClient(
                    timeout=httpx.Timeout(timeout_seconds),
                    follow_redirects=True,
                    verify=False,
                    headers={"User-Agent": "AskMyNotesBot/1.0 (+https://askmynotes.local)"},
                ) as insecure_client:
                    response = await insecure_client.get(target_url)
                    response.raise_for_status()
            except httpx.HTTPError as insecure_exc:
                raise ScrapingError(f"Failed to fetch URL: {insecure_exc}") from insecure_exc
        else:
            raise ScrapingError(f"Failed to fetch URL: {exc}") from exc

    content_type = response.headers.get("content-type", "").lower()
    raw_text = response.text
    if "text/html" in content_type or "<html" in raw_text[:500].lower():
        extracted_text = extract_visible_text(raw_text)
        soup = BeautifulSoup(raw_text, "html.parser")
        title = (soup.title.string or "").strip() if soup.title else ""
    else:
        extracted_text = raw_text.strip()
        title = ""

    if not extracted_text:
        raise ScrapingError("The URL was fetched but no readable text was found.")

    trimmed_text = extracted_text[:MAX_CONTENT_CHARS]
    return {
        "text": trimmed_text,
        "title": title,
        "sourceUrl": target_url,
        "sourceFormat": "url",
        "ocr_used": False,
        "confidence": 1.0,
    }
