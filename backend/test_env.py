import sys
import os
sys.path.append(os.getcwd())
from app.core.config import settings
print(f"GEMINI_API_KEY: '{settings.GEMINI_API_KEY}'")
print(f"GOOGLE_APPLICATION_CREDENTIALS: '{settings.GOOGLE_APPLICATION_CREDENTIALS}'")
