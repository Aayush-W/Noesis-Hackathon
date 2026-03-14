from contextlib import asynccontextmanager
import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.routes import upload_routes, chat_routes, study_routes

import firebase_admin
from firebase_admin import credentials

logger = logging.getLogger(__name__)

@asynccontextmanager
async def lifespan(_: FastAPI):
    # Initialize Firebase Admin SDK
    try:
        if not firebase_admin._apps:
            import os
            service_account_path = settings.GOOGLE_APPLICATION_CREDENTIALS or settings.FIREBASE_SERVICE_ACCOUNT_PATH
            
            if service_account_path and os.path.exists(service_account_path):
                # Ensure the environment variable is set for other Google Cloud libraries (like Firestore)
                os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath(service_account_path)
                cred = credentials.Certificate(service_account_path)
                firebase_admin.initialize_app(cred)
                logger.info(f"Firebase Admin initialized with service account: {service_account_path}")
            else:
                # Fallback: try Application Default Credentials (works on GCP / if gcloud auth is set)
                try:
                    firebase_admin.initialize_app()
                    logger.info("Firebase Admin initialized via Application Default Credentials")
                except Exception as inner_e:
                    logger.warning(f"Failed to auto-discover Application Default Credentials. (This is expected in CI/Demo if no JSON is provided). Error: {inner_e}")
                    # Initialize empty so the app boots for the Demo script, but database writes will fail if not actually authenticated.
                    logger.warning("Initializing mock firebase admin app for UI startup.")
                    firebase_admin.initialize_app(options={'projectId': 'demo-project'})
    except Exception as e:
        logger.warning(f"Firebase Admin initialization failed: {e}")
    yield

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AskMyNotes API - Firebase Spark Plan Version",
    version="1.0.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "http://localhost:5175",
        "http://127.0.0.1:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(upload_routes.router, prefix=f"{settings.API_V1_STR}/upload", tags=["Upload"])
app.include_router(chat_routes.router, prefix=f"{settings.API_V1_STR}/qa", tags=["Q&A"])
app.include_router(study_routes.router, prefix=f"{settings.API_V1_STR}/study", tags=["Study Mode"])

@app.get("/")
async def root() -> dict:
    return {"service": settings.PROJECT_NAME, "status": "running"}

@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}
