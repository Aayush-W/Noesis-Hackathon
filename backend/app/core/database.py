from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings
import logging

logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    db = None

db_instance = Database()

async def connect_to_mongo():
    logger.info("Connecting to MongoDB...")
    db_instance.client = AsyncIOMotorClient(settings.MONGODB_URL)
    db_instance.db = db_instance.client[settings.DATABASE_NAME]
    logger.info("Connected to MongoDB successfully.")

async def close_mongo_connection():
    logger.info("Closing MongoDB connection...")
    if db_instance.client:
        db_instance.client.close()
    logger.info("MongoDB connection closed.")

# Helper to get the database instance
def get_db():
    if db_instance.db is None:
        raise Exception("Database not initialized. Call connect_to_mongo first.")
    return db_instance.db
