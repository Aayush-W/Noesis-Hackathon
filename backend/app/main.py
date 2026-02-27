from contextlib import asynccontextmanager
import logging

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.config import settings
from app.core.database import close_mongo_connection, connect_to_mongo, get_db
from app.routes import auth_routes, coverage_routes, qa_routes, study_routes, subject_routes, upload_routes

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(_: FastAPI):
    try:
        await connect_to_mongo()
    except Exception as e:
        logger.warning("MongoDB connection failed during startup: %s. Server will start without database.", e)
    try:
        yield
    finally:
        await close_mongo_connection()


app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AI-powered study assistant with grounded RAG and coverage heatmaps.",
    version="1.0.0",
    openapi_url=f"{settings.API_V1_STR}/openapi.json",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router, prefix=f"{settings.API_V1_STR}/auth", tags=["Authentication"])
app.include_router(subject_routes.router, prefix=f"{settings.API_V1_STR}/subjects", tags=["Subjects"])
app.include_router(upload_routes.router, prefix=f"{settings.API_V1_STR}/upload", tags=["Upload"])
app.include_router(qa_routes.router, prefix=f"{settings.API_V1_STR}/qa", tags=["Q&A"])
app.include_router(study_routes.router, prefix=f"{settings.API_V1_STR}/study", tags=["Study Mode"])
app.include_router(coverage_routes.router, prefix=f"{settings.API_V1_STR}/coverage", tags=["Heatmaps"])


@app.get("/")
async def root() -> dict:
    return {"service": settings.PROJECT_NAME, "status": "running", "message": "Welcome to AskMyNotes API"}


@app.get("/health")
async def health() -> dict:
    return {"status": "ok"}


@app.get("/health/ready")
async def health_ready() -> JSONResponse:
    checks = {
        "mongodb": False,
        "geminiApiKeyConfigured": bool(settings.GEMINI_API_KEY.strip()),
    }

    try:
        db = get_db()
        await db.command("ping")
        checks["mongodb"] = True
    except Exception:
        checks["mongodb"] = False

    ready = all(checks.values())
    status_code = 200 if ready else 503
    return JSONResponse(
        status_code=status_code,
        content={
            "status": "ready" if ready else "degraded",
            "checks": checks,
        },
    )
