from pydantic import BaseModel, Field
from typing import List, Optional, Dict

class QARequest(BaseModel):
    subjectId: str
    query: str
    history: Optional[List[Dict[str, str]]] = Field(default_factory=list)

class Citation(BaseModel):
    fileName: str
    locationRef: str
    chunkId: str
    sourceFormat: str

class QAResponse(BaseModel):
    answer: str
    confidenceTier: str
    confidenceScore: float
    citations: List[Citation]
    evidenceSnippets: List[str]
