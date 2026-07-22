from google import genai
import os
import sys

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), "backend"))
from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

test_models = [
    "models/gemini-1.5-flash-latest",
    "models/gemini-flash-latest",
    "models/gemini-1.5-flash-001",
    "models/gemini-pro-latest",
    "models/gemini-1.5-pro-latest"
]

for model_name in test_models:
    print(f"Testing {model_name}...")
    try:
        resp = client.models.generate_content(model=model_name, contents="test")
        print(f"  SUCCESS: {model_name}")
        break
    except Exception as e:
        print(f"  FAILED: {model_name} - {str(e)[:100]}...")
