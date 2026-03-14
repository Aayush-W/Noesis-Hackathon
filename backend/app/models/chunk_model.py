from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any

class ChunkModel(BaseModel):
    """
    Representation of a vector chunk stored as a subcollection in Firestore.
    Collection Path: /users/{user_id}/subjects/{subject_id}/documents/{document_id}/chunks/{chunk_id}
    """
    id: Optional[str] = Field(None, description="Firestore Document ID for the chunk")
    document_id: str = Field(description="Parent Document ID")
    text_content: str
    
    # NOTE: Firestore Vector Search limit is 2048 dimensions if using native VectorValue.
    # Warning: Gemini embeddings (gemini-embedding-001) are 3072 dimensions.
    # You will need to truncate the dimensions or use a 768-dimension model (text-embedding-004)
    embedding: Optional[List[float]] = Field(None, description="Vector embedding for the chunk")
    
    chunk_index: int
    page_number: Optional[int] = None
    metadata: Dict[str, Any] = Field(default_factory=dict)
    
    class Config:
        from_attributes = True
