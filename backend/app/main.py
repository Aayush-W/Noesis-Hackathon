from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from app.core.config import settings
from app.core.database import connect_to_mongo, close_mongo_connection
from app.routes import auth_routes, subject_routes, upload_routes, qa_routes, study_routes, coverage_routes

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Connect to MongoDB
    await connect_to_mongo()
    yield
    # Shutdown: Close connection
    await close_mongo_connection()

app = FastAPI(
    title=settings.PROJECT_NAME,
    description="AI-powered study assistant with grounded RAG and coverage heatmaps.",
    version="1.0.0",
    lifespan=lifespan
)

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Adjust for production (e.g., ["http://localhost:5173"])
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth_routes.router, prefix=f"{settings.API_V1_STR}/auth", tags=["Authentication"])
app.include_router(subject_routes.router, prefix=f"{settings.API_V1_STR}/subjects", tags=["Subjects"])
app.include_router(upload_routes.router, prefix=f"{settings.API_V1_STR}/upload", tags=["Upload"])
app.include_router(qa_routes.router, prefix=f"{settings.API_V1_STR}/qa", tags=["Q&A"])
app.include_router(study_routes.router, prefix=f"{settings.API_V1_STR}/study", tags=["Study Mode"])
app.include_router(coverage_routes.router, prefix=f"{settings.API_V1_STR}/coverage", tags=["Heatmaps"])

@app.get("/")
async def root():
    return {"message": "Welcome to AskMyNotes API", "status": "online"}
