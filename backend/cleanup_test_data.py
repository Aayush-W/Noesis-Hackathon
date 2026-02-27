"""
Run this script ONCE to clean up dummy test chunks from ChromaDB and MongoDB.
These were uploaded by an automated test session and contain placeholder text.

Usage:
    python cleanup_test_data.py
"""
import asyncio
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("cleanup")


async def main():
    from app.core.database import connect_to_mongo, get_db
    from app.vectorstore.chroma_client import chroma_client

    await connect_to_mongo()
    db = get_db()

    # Find all documents that contain placeholder/dummy text in their chunks
    logger.info("Scanning for dummy test chunks...")

    dummy_keywords = [
        "This is a much longer piece of text",
        "maths_long.txt",
        "maths notes. This is a",
    ]

    dummy_doc_ids = set()

    for keyword in dummy_keywords:
        async for chunk in db.chunks.find({"text": {"$regex": keyword}}):
            dummy_doc_ids.add(chunk.get("documentId"))
            logger.info(f"Found dummy chunk in doc: {chunk.get('documentId')} | file: {chunk.get('fileName')}")

    if not dummy_doc_ids:
        logger.info("No dummy test data found. ChromaDB is clean!")
        return

    logger.info(f"\nFound {len(dummy_doc_ids)} document(s) to clean up: {dummy_doc_ids}")

    for doc_id in dummy_doc_ids:
        if not doc_id:
            continue

        doc = await db.documents.find_one({"id": doc_id})
        if doc:
            subject_id = doc.get("subjectId", "maths")
            filename = doc.get("fileName", "unknown")
            user_id = doc.get("userId", "")
            logger.info(f"Deleting: {filename} (subject={subject_id}, user={user_id})")

            # Delete from ChromaDB
            try:
                collection = chroma_client.get_collection(f"subject_{subject_id}")
                chunk_ids = [c["chunkId"] async for c in db.chunks.find({"documentId": doc_id}, {"chunkId": 1}) if "chunkId" in c]
                if chunk_ids:
                    collection.delete(ids=chunk_ids)
                    logger.info(f"  Removed {len(chunk_ids)} chunks from ChromaDB")
            except Exception as e:
                logger.warning(f"  ChromaDB error: {e}")

            # Delete from MongoDB
            r1 = await db.chunks.delete_many({"documentId": doc_id})
            r2 = await db.documents.delete_one({"id": doc_id})
            logger.info(f"  Deleted {r1.deleted_count} chunks and {r2.deleted_count} documents from MongoDB")

    logger.info("\nCleanup complete!")


if __name__ == "__main__":
    asyncio.run(main())
