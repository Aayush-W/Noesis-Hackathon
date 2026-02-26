from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional

class SubjectBase(BaseModel):
    name: str

class SubjectCreate(SubjectBase):
    pass

class SubjectResponse(SubjectBase):
    id: str
    userId: str
    createdAt: datetime
    
    model_config = ConfigDict(from_attributes=True)
