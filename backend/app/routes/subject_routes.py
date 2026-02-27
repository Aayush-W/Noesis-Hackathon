from datetime import datetime
from typing import List

from fastapi import APIRouter, HTTPException, Request

from app.core.database import get_db
from app.schemas.subject_schema import SubjectCreate, SubjectResponse
from app.utils.user_context import resolve_user_id

router = APIRouter()

ALLOWED_SUBJECTS = [
    {"id": "maths", "name": "Maths"},
    {"id": "chemistry", "name": "Chemistry"},
    {"id": "physics", "name": "Physics"},
]


def _normalize(name: str) -> str:
    return name.strip().lower()


async def _ensure_fixed_subjects(db, user_id: str):
    for subject in ALLOWED_SUBJECTS:
        existing = await db.subjects.find_one({"id": subject["id"], "userId": user_id})
        if existing:
            continue
        await db.subjects.insert_one(
            {
                "id": subject["id"],
                "name": subject["name"],
                "userId": user_id,
                "createdAt": datetime.utcnow(),
            }
        )


@router.post("/", response_model=SubjectResponse)
async def create_subject(subject_in: SubjectCreate, request: Request):
    """
    Fixed-subject mode:
    - only Maths/Chemistry/Physics are valid
    - returns existing subject record if already present
    - rejects any non-fixed subject name
    """
    db = get_db()
    user_id = resolve_user_id(request)
    await _ensure_fixed_subjects(db, user_id)

    normalized = _normalize(subject_in.name)
    match = next((item for item in ALLOWED_SUBJECTS if _normalize(item["name"]) == normalized), None)
    if not match:
        raise HTTPException(
            status_code=400,
            detail="Only fixed subjects are allowed: Maths, Chemistry, Physics.",
        )

    subject = await db.subjects.find_one({"id": match["id"], "userId": user_id})
    if not subject:
        subject = {
            "id": match["id"],
            "name": match["name"],
            "userId": user_id,
            "createdAt": datetime.utcnow(),
        }
        await db.subjects.insert_one(subject)

    return SubjectResponse(**subject)


@router.get("/", response_model=List[SubjectResponse])
async def list_subjects(request: Request):
    db = get_db()
    user_id = resolve_user_id(request)
    await _ensure_fixed_subjects(db, user_id)

    ids = [item["id"] for item in ALLOWED_SUBJECTS]
    cursor = db.subjects.find({"userId": user_id, "id": {"$in": ids}})
    found = await cursor.to_list(length=10)
    by_id = {item["id"]: item for item in found}

    ordered = [by_id[item["id"]] for item in ALLOWED_SUBJECTS if item["id"] in by_id]
    return [SubjectResponse(**subject) for subject in ordered]


@router.get("/{subject_id}", response_model=SubjectResponse)
async def get_subject(subject_id: str, request: Request):
    db = get_db()
    user_id = resolve_user_id(request)
    await _ensure_fixed_subjects(db, user_id)

    if subject_id not in {item["id"] for item in ALLOWED_SUBJECTS}:
        raise HTTPException(
            status_code=404,
            detail="Subject not found. Allowed subjects: Maths, Chemistry, Physics.",
        )

    subject = await db.subjects.find_one({"id": subject_id, "userId": user_id})
    if not subject:
        raise HTTPException(status_code=404, detail="Subject not found")
    return SubjectResponse(**subject)
