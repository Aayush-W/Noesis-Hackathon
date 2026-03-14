import os
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    PROJECT_NAME: str = "AskMyNotes"
    API_V1_STR: str = "/api/v1"
    
    # Gemini API
    GEMINI_API_KEY: str = ""
    
    # Firebase Service Account
    GOOGLE_APPLICATION_CREDENTIALS: str = ""
    FIREBASE_SERVICE_ACCOUNT_PATH: str = ""
    
    # Security
    SECRET_KEY: str = "your-secret-key-here"  # change in production
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 15
    
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", case_sensitive=True, extra="ignore")

settings = Settings()
