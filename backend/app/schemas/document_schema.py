from pydantic import BaseModel, ConfigDict
from datetime import datetime
from typing import Optional, List

class DocumentBase(BaseModel):
    fileName: str
    sourceFormat: str

class DocumentResponse(DocumentBase):
    id: str
    userId: str
    subjectId: str
    uploadDate: datetime
    status: str = "Indexed"
    
    model_config = ConfigDict(from_attributes=True)

class ChunkResponse(BaseModel):
    chunkId: str
    text: str
    fileName: str
    locationRef: str
    
    model_config = ConfigDict(from_attributes=True)
