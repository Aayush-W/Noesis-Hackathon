from google import genai
import os
import sys

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), "backend"))
from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

print("Flash Models:")
for model in client.models.list():
    if "flash" in model.name.lower():
        print(f"- {model.name}")
