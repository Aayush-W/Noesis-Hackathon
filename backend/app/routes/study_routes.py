from fastapi import APIRouter, HTTPException
from app.services.study_service import generate_quiz, get_remedial_chunk
from app.core.database import get_db

router = APIRouter()

@router.post("/generate/{subject_id}")
async def generate_subject_quiz(subject_id: str):
    try:
        quiz = await generate_quiz(subject_id)
        if "error" in quiz:
            raise HTTPException(status_code=500, detail=quiz["error"])
        return quiz
    except ValueError as v:
        raise HTTPException(status_code=400, detail=str(v))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/remedial/{chunk_id}")
async def fetch_remedial_context(chunk_id: str):
    chunk = await get_remedial_chunk(chunk_id)
    if not chunk:
        raise HTTPException(status_code=404, detail="Source chunk not found")
    return chunk
