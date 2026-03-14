from pydantic import BaseModel, Field
from datetime import datetime, timezone
from typing import Optional, Dict, Any

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

class DocumentModel(BaseModel):
    """
    Representation of a processed document in Firestore.
    Collection Path: /users/{user_id}/subjects/{subject_id}/documents/{document_id}
    """
    id: Optional[str] = Field(None, description="Firestore Document ID")
    subject_id: str = Field(description="Reference to parent Subject ID")
    title: str
    source_format: str = Field(description="e.g. pdf, docx, website")
    location_ref: str = Field(description="Firebase Storage gs:// path or public URL")
    metadata: Dict[str, Any] = Field(default_factory=dict, description="Custom properties like page count")
    created_at: datetime = Field(default_factory=utc_now)
    
    class Config:
        from_attributes = True
