import asyncio
import os
import sys

# Add backend to path
sys.path.append(os.path.abspath("."))

from firebase_admin import firestore, credentials
from google.cloud.firestore_v1.base_query import FieldFilter
from google.cloud.firestore_v1.vector import Vector
from google.cloud.firestore_v1.base_vector_query import DistanceMeasure
import firebase_admin

async def test_firestore():
    print("Testing Firestore Index...")
    try:
        if not firebase_admin._apps:
            cred_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "./firebase-service-account.json")
            cred = credentials.Certificate(cred_path)
            firebase_admin.initialize_app(cred)
            print(f"Firebase initialized.")
            
        db = firestore.client()
        chunks_group = db.collection_group("chunks")
        
        # Test query
        print("Executing CollectionGroup query...")
        query = chunks_group.where(filter=FieldFilter("userId", "==", "test")).where(filter=FieldFilter("subjectId", "==", "maths"))
        
        # This will trigger an error if index is missing
        docs = list(query.limit(1).stream())
        print(f"Query successful! Found {len(docs)} docs.")
        
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_firestore())
