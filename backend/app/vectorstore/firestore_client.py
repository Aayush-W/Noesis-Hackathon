from firebase_admin import firestore
from google.cloud.firestore_v1.base_query import FieldFilter
from google.cloud.firestore_v1.vector import Vector
from google.cloud.firestore_v1.base_vector_query import DistanceMeasure

def get_firestore_client():
    """Retrieve the initialized Firestore client."""
    return firestore.client()

def store_chunk(userId: str, subjectId: str, documentId: str, chunkId: str, chunk_data: dict, embedding: list[float]):
    """
    Store a document chunk with its vector embedding in Firestore.
    Path: /users/{userId}/subjects/{subjectId}/documents/{documentId}/chunks/{chunk_id}
    """
    db = get_firestore_client()
    
    # Store embedding as a Firestore Vector
    chunk_data["embedding"] = Vector(embedding)
    
    doc_ref = db.collection("users").document(userId) \
                .collection("subjects").document(subjectId) \
                .collection("documents").document(documentId) \
                .collection("chunks").document(chunkId)
                
    doc_ref.set(chunk_data)
    return chunk_id

def find_similar_chunks(userId: str, subjectId: str, query_embedding: list[float], limit: int = 5):
    """
    Perform a vector search (KNN) on chunks belonging to a specific subject.
    Note: Requires a composite index for the 'subjectId' filter and 'embedding' vector field.
    """
    db = get_firestore_client()
    
    # We query the Subcollection Group "chunks" (if using collectionGroup) 
    # OR we query the specific document chunks. Since chunks are under specific documents,
    # the best way to do subject-level search is a CollectionGroup query filtered by subjectId.
    
    # Requires an index on `subjectId` (ASC) and `embedding` (VECTOR)
    chunks_group = db.collection_group("chunks")
    
    # Filter by user and subject to ensure tenant isolation
    query = chunks_group.where(filter=FieldFilter("userId", "==", userId)) \
                        .where(filter=FieldFilter("subjectId", "==", subjectId)) \
                        .find_nearest(
                            vector_field="embedding",
                            query_vector=Vector(query_embedding),
                            distance_measure=DistanceMeasure.COSINE,
                            limit=limit,
                            distance_result_field="vector_distance"
                        )
    
    docs = query.stream()
    
    results = []
    for doc in docs:
        data = doc.to_dict()
        # Remove embedding from output to save bandwidth
        if "embedding" in data:
            del data["embedding"]
            
        data["id"] = doc.id
        results.append(data)
        
    return results
