from pydantic import BaseModel, Field
from datetime import datetime, timezone
from typing import Optional

def utc_now() -> datetime:
    return datetime.now(timezone.utc)

class UserModel(BaseModel):
    uid: str = Field(description="Firebase Auth UID, acts as the document ID in 'users' collection")
    email: str
    display_name: Optional[str] = None
    created_at: datetime = Field(default_factory=utc_now)
    updated_at: datetime = Field(default_factory=utc_now)
    
    class Config:
        from_attributes = True
