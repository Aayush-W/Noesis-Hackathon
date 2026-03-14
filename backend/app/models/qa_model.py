from pydantic import BaseModel, Field
from datetime import datetime, timezone
from typing import Optional, List

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

class MessageModel(BaseModel):
    role: str = Field(description="'user' or 'system' or 'assistant'")
    content: str
    timestamp: datetime = Field(default_factory=utc_now)

class QASessionModel(BaseModel):
    """
    Representation of a chat interaction in Firestore.
    Collection Path: /users/{user_id}/sessions/{session_id}
    """
    id: Optional[str] = None
    user_id: str = Field(description="Owner of the session")
    subject_id: Optional[str] = Field(None, description="Tied to a specific subject search context")
    messages: List[MessageModel] = Field(default_factory=list)
    created_at: datetime = Field(default_factory=utc_now)
    updated_at: datetime = Field(default_factory=utc_now)
    
    class Config:
        from_attributes = True
