from google import genai
import os
import sys

# Add backend to path
sys.path.append(os.path.join(os.getcwd(), "backend"))
from app.core.config import settings

client = genai.Client(api_key=settings.GEMINI_API_KEY)

models_list = []
for model in client.models.list():
    models_list.append(model.name)

with open("available_models.txt", "w") as f:
    for m in models_list:
        f.write(f"{m}\n")

print(f"Successfully saved {len(models_list)} models to available_models.txt")
