import os
import sys

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), "backend"))

from app.core.config import settings

print(f"Current Working Directory: {os.getcwd()}")
print(f"__file__ of config: {os.path.abspath('backend/app/core/config.py')}")
env_file_path = os.path.join(os.path.dirname(os.path.abspath('backend/app/core/config.py')), "..", "..", ".env")
print(f"Expected .env path (manual calc): {os.path.abspath(env_file_path)}")
print(f"Does .env exist? {os.path.exists(os.path.abspath(env_file_path))}")

print(f"Loaded GEMINI_API_KEY: '{settings.GEMINI_API_KEY[:10]}...' if settings.GEMINI_API_KEY else 'EMPTY'")
