from pydantic import BaseModel, Field
from datetime import datetime, timezone
from typing import Optional

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

class SubjectModel(BaseModel):
    """
    Representation of a subject (domain area) in Firestore.
    Collection Path: /users/{user_id}/subjects/{subject_id}
    """
    id: Optional[str] = Field(None, description="Firestore Document ID")
    user_id: str = Field(description="Owner of the subject (from Firebase Auth)")
    name: str
    description: Optional[str] = None
    created_at: datetime = Field(default_factory=utc_now)
    
    class Config:
        from_attributes = True
