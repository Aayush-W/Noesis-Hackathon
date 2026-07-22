import sys
import os
sys.path.append(os.getcwd())
from app.services.rag_service import _client
from app.core.config import settings

print(f"Settings key: '{settings.GEMINI_API_KEY}'")
print(f"Client key (internal): '{_client._api_key}'") # Internal access for debugging
