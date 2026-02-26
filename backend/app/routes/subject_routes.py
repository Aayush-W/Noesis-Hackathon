from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.schemas.subject_schema import SubjectCreate, SubjectResponse
from app.core.database import get_db
from datetime import datetime
import uuid

router = APIRouter()
MOCK_USER_ID = "user_123" # Temporary mock for hackathon testing

@router.post("/", response_model=SubjectResponse)
async def create_subject(subject_in: SubjectCreate):
    db = get_db()
    
    # Strictly enforce 3 subject limit per hackathon rules
    subject_count = await db.subjects.count_documents({"userId": MOCK_USER_ID})
    if subject_count >= 3:
        raise HTTPException(status_code=400, detail="Subject limit reached (max 3 subjects).")
    
    new_subject = {
        "id": str(uuid.uuid4()),
        "name": subject_in.name,
        "userId": MOCK_USER_ID,
        "createdAt": datetime.utcnow()
    }
    
    await db.subjects.insert_one(new_subject)
    return SubjectResponse(**new_subject)

@router.get("/", response_model=List[SubjectResponse])
async def list_subjects():
    db = get_db()
    cursor = db.subjects.find({"userId": MOCK_USER_ID})
    subjects = await cursor.to_list(length=10)
    return [SubjectResponse(**s) for s in subjects]

@router.get("/{subject_id}", response_model=SubjectResponse)
async def get_subject(subject_id: str):
    db = get_db()
    subject = await db.subjects.find_one({"id": subject_id})
    if not subject:
        raise HTTPException(status_code=404, detail="Subject not found")
    return SubjectResponse(**subject)
