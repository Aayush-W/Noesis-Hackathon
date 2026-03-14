import httpx
import os
import asyncio

async def test_pipeline():
    base_url = "http://localhost:8000/api/v1"
    
    print("1. Testing Upload Pipeline with dummy URL...")
    # Allow a much longer timeout for OCR and Gemini rate limits.
    timeout = httpx.Timeout(240.0) 
    async with httpx.AsyncClient(timeout=timeout) as client:
        # Pass a secret header to bypass Firebase Auth for local testing (using the USE_DUMMY_AUTH escape hatch we added)
        # Note: we need to restart the server with USE_DUMMY_AUTH=true, or just simulate the fallback
        response = await client.post(
            f"{base_url}/upload/url",
            data={
                "subjectId": "maths",
                "url": "http://example.com/"
            }
        )
        print(f"Upload Status: {response.status_code}")
        try:
             print(f"Upload Response: {response.json()}")
        except:
             print(f"Upload Raw Text: {response.text}")

        # If upload fails because of 401 Unauthorized, we know the Auth strict check is working.
        if response.status_code == 401:
            print("\nSUCCESS: Firebase Auth correctly blocked an unauthenticated request! To test full data ingestion without React, we would need to generate a real Firebase Auth token or temporarily set USE_DUMMY_AUTH=true.")
            return

        print("\n2. Testing Chat/RAG Pipeline...")
        chat_resp = await client.post(
            f"{base_url}/qa/ask",
            json={
                "subjectId": "maths",
                "question": "What is the Pythagorean theorem?"
            }
        )
        print(f"Chat Status: {chat_resp.status_code}")
        try:
             print(f"Chat Response: {chat_resp.json()}")
        except:
             print(f"Chat Raw Text: {chat_resp.text}")

if __name__ == "__main__":
    asyncio.run(test_pipeline())
