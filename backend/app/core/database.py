from __future__ import annotations

import certifi
from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from pymongo import ASCENDING, IndexModel

from app.core.config import settings


class MongoProxy:
    """Proxy object so `from app.core.database import db` stays valid after connect."""

    def __init__(self) -> None:
        self._database: AsyncIOMotorDatabase | None = None

    def set_database(self, database: AsyncIOMotorDatabase) -> None:
        self._database = database

    def clear(self) -> None:
        self._database = None

    def _get_database(self) -> AsyncIOMotorDatabase:
        if self._database is None:
            raise RuntimeError("MongoDB is not connected. Call connect_to_mongo() first.")
        return self._database

    def __getattr__(self, item: str):
        return getattr(self._get_database(), item)

    def __getitem__(self, item: str):
        return self._get_database()[item]


mongo_client: AsyncIOMotorClient | None = None
db = MongoProxy()


async def _create_indexes(database: AsyncIOMotorDatabase) -> None:
    await database["chunks"].create_indexes(
        [
            IndexModel([("chunkId", ASCENDING)], name="ux_chunks_chunkId", unique=True),
            IndexModel([("subjectId", ASCENDING)], name="ix_chunks_subjectId"),
            IndexModel([("documentId", ASCENDING)], name="ix_chunks_documentId"),
        ]
    )

    await database["qa_logs"].create_indexes(
        [
            IndexModel([("subjectId", ASCENDING)], name="ix_qalogs_subjectId"),
            IndexModel(
                [("subjectId", ASCENDING), ("confidenceTier", ASCENDING)],
                name="ix_qalogs_subject_confidence",
            ),
        ]
    )


async def connect_to_mongo() -> AsyncIOMotorDatabase:
    global mongo_client
    import logging

    logger = logging.getLogger(__name__)

    if mongo_client is None:
        # Try primary connection (Atlas or configured URL)
        try:
            mongo_kwargs = {
                "serverSelectionTimeoutMS": 5000,
                "uuidRepresentation": "standard",
            }
            # Use explicit CA chain for Atlas/TLS connections only.
            if settings.MONGODB_URL.startswith("mongodb+srv://") or "mongodb.net" in settings.MONGODB_URL:
                mongo_kwargs["tlsCAFile"] = certifi.where()

            mongo_client = AsyncIOMotorClient(
                settings.MONGODB_URL,
                **mongo_kwargs,
            )
            await mongo_client.admin.command("ping")
            logger.info("Connected to MongoDB: %s", settings.MONGODB_URL[:40] + "...")
        except Exception as primary_err:
            logger.warning("Primary MongoDB connection failed: %s", primary_err)

            # Fallback to local MongoDB
            fallback_url = "mongodb://localhost:27017"
            try:
                mongo_client = AsyncIOMotorClient(
                    fallback_url,
                    serverSelectionTimeoutMS=3000,
                    uuidRepresentation="standard",
                )
                await mongo_client.admin.command("ping")
                logger.info("Connected to fallback MongoDB at %s", fallback_url)
            except Exception as fallback_err:
                logger.error("Fallback MongoDB also failed: %s", fallback_err)
                raise primary_err  # raise original error

        database = mongo_client[settings.DATABASE_NAME]
        db.set_database(database)
        await _create_indexes(database)

    return db._get_database()


async def close_mongo_connection() -> None:
    global mongo_client

    if mongo_client is not None:
        mongo_client.close()
        mongo_client = None

    db.clear()


def get_database() -> AsyncIOMotorDatabase:
    return db._get_database()


def get_db() -> AsyncIOMotorDatabase:
    """Compatibility helper used by route/service modules."""
    return get_database()
