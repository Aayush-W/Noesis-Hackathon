import json
import asyncio
import random
from typing import List
from google import genai
from google.genai import types as genai_types
from firebase_admin import firestore
import os

GENERATION_MODEL = "models/gemini-flash-lite-latest"

def _get_client():
    return genai.Client(api_key=os.environ.get("GEMINI_API_KEY"))

async def _identify_key_concepts(subject_id: str, user_id: str) -> List[str]:
    db = firestore.client()
    chunks_ref = db.collection("users").document(user_id).collection("subjects").document(subject_id).collection("chunks")
    docs = chunks_ref.limit(20).get()
    chunks = [{"chunkId": doc.id, **doc.to_dict()} for doc in docs]
    if not chunks:
        return []
    
    chunks_summary = "\n".join([f"- {c.get('text', '')[:150]}..." for c in chunks])
    prompt = f"Analyze these snippets and identify the 5 most important distinct concepts. Output ONLY a JSON list of strings.\nNOTES:\n{chunks_summary}"
    try:
        client = _get_client()
        loop = asyncio.get_running_loop()
        resp = await loop.run_in_executor(
            None, lambda: client.models.generate_content(
                model=GENERATION_MODEL, contents=prompt,
                config=genai_types.GenerateContentConfig(response_mime_type="application/json")
            )
        )
        return json.loads(resp.text)
    except Exception:
        return []

async def generate_quiz(subject_id: str, user_id: str) -> dict:
    db = firestore.client()
    chunks_ref = db.collection("users").document(user_id).collection("subjects").document(subject_id).collection("chunks")
    concepts = await _identify_key_concepts(subject_id, user_id)
    selected = []
    
    all_chunks = [{"chunkId": doc.id, **doc.to_dict()} for doc in chunks_ref.limit(50).get()]
    if not all_chunks:
        raise ValueError("Not enough notes uploaded for this subject to generate a quiz.")
    
    for c in concepts:
        for chunk in all_chunks:
            if chunk not in selected and c.lower() in chunk.get("text", "").lower():
                selected.append(chunk)
                break
                
    if len(selected) < 8:
        rem = [c for c in all_chunks if c not in selected]
        selected.extend(random.sample(rem, min(8 - len(selected), len(rem))))
        
    chunks_text = "\n".join([f"[CHUNK ID: {c['chunkId']}]\n{c.get('text', '')}" for c in selected])
    prompt = f"""Generate a study quiz based ONLY on the following text chunks. Follow exact JSON structure.
CHUNKS:
{chunks_text}
JSON SCHEMA:
{{ "mcqs": [ {{"question":"", "options":["A","B","C","D"], "correctOptionIndex":0, "explanation":"", "sourceChunkId":""}} ],
  "saqs": [ {{"question":"", "modelAnswer":"", "sourceChunkId":""}} ] }}
Must have exactly 5 MCQs and 3 SAQs."""

    try:
        client = _get_client()
        loop = asyncio.get_running_loop()
        resp = await loop.run_in_executor(
            None, lambda: client.models.generate_content(
                model=GENERATION_MODEL, contents=prompt,
                config=genai_types.GenerateContentConfig(response_mime_type="application/json")
            )
        )
        return json.loads(resp.text)
    except Exception:
        return {"error": "Failed to generate quiz format"}
