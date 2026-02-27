import logging
import uuid
from datetime import datetime
from urllib.parse import urlparse

from fastapi import APIRouter, File, Form, HTTPException, Request, UploadFile

from app.core.database import get_db
from app.services.chunking_service import chunk_text
from app.services.embedding_service import embed_chunks
from app.services.extraction_service import extract_text_from_file
from app.services.scraping_service import ScrapingError, scrape_url
from app.utils.user_context import resolve_user_id
from app.vectorstore.chroma_client import get_collection

logger = logging.getLogger(__name__)

router = APIRouter()

MAX_FILE_SIZE_MB = 50
ALLOWED_EXTENSIONS = {"pdf", "txt", "docx", "pptx", "png", "jpg", "jpeg"}


FIXED_SUBJECTS = [
    {"id": "maths", "name": "Maths"},
    {"id": "chemistry", "name": "Chemistry"},
    {"id": "physics", "name": "Physics"},
]


async def _ensure_subject(db, subject_id: str, user_id: str) -> None:
    """Silently create all 3 fixed subjects for this user if they don't exist."""
    for s in FIXED_SUBJECTS:
        await db.subjects.update_one(
            {"id": s["id"], "userId": user_id},
            {"$setOnInsert": {"id": s["id"], "name": s["name"], "userId": user_id, "createdAt": datetime.utcnow()}},
            upsert=True,
        )


def _url_to_filename(url: str, title: str | None) -> str:
    parsed = urlparse(url)
    raw_name = (title or parsed.path.strip("/").split("/")[-1] or parsed.netloc or "web_source").strip()
    safe = "".join(ch if ch.isalnum() or ch in ("-", "_", ".") else "_" for ch in raw_name)
    safe = safe[:70] if len(safe) > 70 else safe
    return f"{safe}.url.txt"


async def _index_document(
    *,
    db,
    user_id: str,
    subject_id: str,
    filename: str,
    source_format: str,
    extraction: dict,
    source_url: str | None = None,
) -> dict:
    doc_id = str(uuid.uuid4())

    try:
        document_entry = {
            "id": doc_id,
            "userId": user_id,
            "subjectId": subject_id,
            "fileName": filename,
            "sourceFormat": source_format,
            "uploadDate": datetime.utcnow(),
            "status": "Indexed",
            "ocrConfidence": extraction.get("confidence", 1.0),
        }
        if source_url:
            document_entry["sourceUrl"] = source_url
        await db.documents.insert_one(document_entry)

        metadata = {
            "subjectId": subject_id,
            "documentId": doc_id,
            "fileName": filename,
            "sourceFormat": source_format,
        }
        chunks = chunk_text(extraction["text"], metadata)
        for chunk in chunks:
            chunk["userId"] = user_id

        embedded_chunks = await embed_chunks(chunks)

        mongo_chunks = [{k: v for k, v in c.items() if k != "embedding"} for c in embedded_chunks]
        if mongo_chunks:
            await db.chunks.insert_many(mongo_chunks)

        collection = get_collection(subject_id)
        collection.add(
            ids=[c["chunkId"] for c in embedded_chunks],
            embeddings=[c["embedding"] for c in embedded_chunks],
            documents=[c["text"] for c in embedded_chunks],
            metadatas=[
                {
                    "documentId": doc_id,
                    "fileName": filename,
                    "sourceFormat": source_format,
                    "locationRef": c["locationRef"],
                    "chunkId": c["chunkId"],
                    "userId": user_id,
                }
                for c in embedded_chunks
            ],
        )

        return {
            "message": "Upload successful",
            "documentId": doc_id,
            "chunkCount": len(embedded_chunks),
        }

    except Exception as exc:
        try:
            await db.documents.delete_one({"id": doc_id})
            await db.chunks.delete_many({"documentId": doc_id})
            logger.warning("Cleaned up partial upload for doc %s", doc_id)
        except Exception as cleanup_err:
            logger.error("Cleanup failed for doc %s: %s", doc_id, cleanup_err)
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/")
async def upload_document(
    request: Request,
    subjectId: str = Form(...),
    file: UploadFile = File(...),
):
    db = get_db()
    user_id = resolve_user_id(request)
    await _ensure_subject(db, subjectId, user_id)

    filename = file.filename or "unknown"
    source_format = filename.rsplit(".", 1)[-1].lower() if "." in filename else ""
    if source_format not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail=f"Unsupported file type '.{source_format}'. Allowed: {', '.join(sorted(ALLOWED_EXTENSIONS))}",
        )

    content = await file.read()
    size_mb = len(content) / (1024 * 1024)
    if size_mb > MAX_FILE_SIZE_MB:
        raise HTTPException(
            status_code=400,
            detail=f"File too large ({size_mb:.1f} MB). Maximum allowed: {MAX_FILE_SIZE_MB} MB.",
        )

    extraction = await extract_text_from_file(content, filename)
    return await _index_document(
        db=db,
        user_id=user_id,
        subject_id=subjectId,
        filename=filename,
        source_format=source_format,
        extraction=extraction,
    )


@router.post("/url")
async def upload_url(
    request: Request,
    subjectId: str = Form(...),
    url: str = Form(...),
):
    db = get_db()
    user_id = resolve_user_id(request)
    await _ensure_subject(db, subjectId, user_id)

    try:
        extraction = await scrape_url(url)
    except ScrapingError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    filename = _url_to_filename(url, extraction.get("title"))
    result = await _index_document(
        db=db,
        user_id=user_id,
        subject_id=subjectId,
        filename=filename,
        source_format="url",
        extraction=extraction,
        source_url=extraction.get("sourceUrl"),
    )
    result["sourceUrl"] = extraction.get("sourceUrl")
    result["title"] = extraction.get("title", "")
    return result


@router.get("/documents/{subject_id}")
async def list_documents(subject_id: str, request: Request):
    """List all documents uploaded for a subject by the current user."""
    db = get_db()
    user_id = resolve_user_id(request)
    cursor = db.documents.find(
        {"subjectId": subject_id, "userId": user_id},
        {"_id": 0, "id": 1, "fileName": 1, "sourceFormat": 1, "uploadDate": 1, "status": 1},
    ).sort("uploadDate", -1)
    docs = await cursor.to_list(length=100)
    return {"documents": docs}


@router.delete("/documents/{doc_id}")
async def delete_document(doc_id: str, request: Request):
    """Delete a document and all its chunks from MongoDB and ChromaDB."""
    db = get_db()
    user_id = resolve_user_id(request)

    doc = await db.documents.find_one({"id": doc_id, "userId": user_id})
    if not doc:
        raise HTTPException(status_code=404, detail="Document not found")

    subject_id = doc.get("subjectId", "")

    # Remove from ChromaDB
    try:
        collection = get_collection(subject_id)
        chunk_docs = await db.chunks.find({"documentId": doc_id}, {"chunkId": 1}).to_list(length=5000)
        chunk_ids = [c["chunkId"] for c in chunk_docs if "chunkId" in c]
        if chunk_ids:
            collection.delete(ids=chunk_ids)
    except Exception as e:
        logger.warning("ChromaDB cleanup error for doc %s: %s", doc_id, e)

    # Remove from MongoDB
    await db.chunks.delete_many({"documentId": doc_id})
    await db.documents.delete_one({"id": doc_id})

    return {"message": "Document deleted", "documentId": doc_id}
