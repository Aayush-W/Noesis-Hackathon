import google.generativeai as genai
import json
import random
import asyncio
import logging
import re
from typing import List
from app.core.config import settings
from app.core.database import get_db

logger = logging.getLogger(__name__)

genai.configure(api_key=settings.GEMINI_API_KEY)

# Use Flash for faster generation of quizzes
study_model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are AskMyNotes Quiz Master. Generate questions STRICTLY from the provided source text chunks.",
)

PROMPT_TEMPLATE = """
Generate a study quiz based ONLY on the following text chunks.
Follow this exact JSON structure and do not output anything else.

CHUNKS:
{chunks_text}

JSON SCHEMA:
{{
  "mcqs": [
    {{
      "question": "Question text",
      "options": ["A", "B", "C", "D"],
      "correctOptionIndex": 0,
      "explanation": "Brief explanation",
      "sourceChunkId": "chunk_id_from_above"
    }}, ... (exactly 5 MCQs)
  ],
  "saqs": [
    {{
      "question": "Short answer question",
      "modelAnswer": "Expected correct answer",
      "sourceChunkId": "chunk_id_from_above"
    }}, ... (exactly 3 SAQs)
  ]
}}
"""

async def _identify_key_concepts(subject_id: str) -> List[str]:
    """
    Identify major topics/concepts in the subject notes using LLM analysis.
    This helps in sampling relevant chunks for the quiz.
    """
    try:
        db = get_db()
        # Fetch a sample of chunks (first 20) to identify core topics
        cursor = db.chunks.find({"subjectId": subject_id}).limit(20)
        chunks = await cursor.to_list(length=20)
        
        if not chunks:
            return []
            
        chunks_summary = "\n".join([f"- {c['text'][:150]}..." for i, c in enumerate(chunks)])
        
        prompt = f"""
        Analyze these snippets from a student's notes and identify the 5 most important distinct concepts, keywords or topics.
        Output ONLY a JSON list of strings.
        
        NOTES:
        {chunks_summary}
        """
        
        loop = asyncio.get_event_loop()
        response = await loop.run_in_executor(
            None,
            lambda: study_model.generate_content(
                prompt,
                generation_config={"response_mime_type": "application/json"}
            )
        )
        concepts = json.loads(response.text)
        logger.info(f"Identified concepts for {subject_id}: {concepts}")
        return concepts
    except Exception as e:
        logger.error(f"Failed to identify concepts: {str(e)}")
        return []

async def generate_quiz(subject_id: str) -> dict:
    """
    Generate a representative quiz by sampling chunks based on identified concepts.
    """
    db = get_db()
    
    # 1. Identify key concepts
    concepts = await _identify_key_concepts(subject_id)
    
    # 2. Sample chunks based on concepts
    selected_chunks = []
    seen_ids = set()
    
    if concepts:
        for concept in concepts:
            # Try to find a chunk containing this concept
            cursor = db.chunks.find({
                "subjectId": subject_id,
                "text": {"$regex": re.escape(concept), "$options": "i"},
                "chunkId": {"$nin": list(seen_ids)}
            }).limit(1)
            concept_chunks = await cursor.to_list(length=1)
            
            if concept_chunks:
                selected_chunks.append(concept_chunks[0])
                seen_ids.add(concept_chunks[0]["chunkId"])
    
    # Fill up to 8 chunks with random sampling if needed
    if len(selected_chunks) < 8:
        needed = 8 - len(selected_chunks)
        pipeline = [
            {"$match": {"subjectId": subject_id, "chunkId": {"$nin": list(seen_ids)}}},
            {"$sample": {"size": needed}}
        ]
        cursor = db.chunks.aggregate(pipeline)
        extra_chunks = await cursor.to_list(length=needed)
        selected_chunks.extend(extra_chunks)
        
    if not selected_chunks:
        raise ValueError("Not enough notes uploaded for this subject to generate a quiz.")
        
    chunks_text = ""
    for c in selected_chunks:
        chunks_text += f"\n[CHUNK ID: {c['chunkId']}]\n{c['text']}\n"
        
    prompt = PROMPT_TEMPLATE.format(chunks_text=chunks_text)
    
    # Enable JSON mode for gemini
    loop = asyncio.get_event_loop()
    response = await loop.run_in_executor(
        None,
        lambda: study_model.generate_content(
            prompt,
            generation_config={"response_mime_type": "application/json"}
        )
    )
    
    try:
        quiz_data = json.loads(response.text)
        return quiz_data
    except json.JSONDecodeError:
        # Fallback if model fails to format JSON correctly
        return {"error": "Failed to generate quiz format"}

async def get_remedial_chunk(chunk_id: str) -> dict:
    """Fetch the exact chunk text for a wrong answer in the UI."""
    db = get_db()
    chunk = await db.chunks.find_one({"chunkId": chunk_id}, {"_id": 0})
    return chunk
