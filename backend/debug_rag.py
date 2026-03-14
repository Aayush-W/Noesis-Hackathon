import asyncio
import os
import sys

# Add backend to path
sys.path.append(os.path.abspath("."))

from app.services.rag_service import ask_question
from firebase_admin import firestore, credentials
import firebase_admin

async def debug_qa():
    print("Initializing Firebase...")
    try:
        if not firebase_admin._apps:
            cred_path = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS", "./firebase-service-account.json")
            cred = credentials.Certificate(cred_path)
            firebase_admin.initialize_app(cred)
            print(f"Firebase initialized with: {cred_path}")
    except Exception as e:
        print(f"Firebase init error: {e}")
        return

    # Simulate a query
    user_id = "test_user" # You might need a real user_id from your Firestore if testing retrieval
    subject_id = "maths"
    question = "test question"
    
    print(f"Executing ask_question(query='{question}', subject_id='{subject_id}', user_id='{user_id}')")
    try:
        response = await ask_question(
            query=question,
            subject_id=subject_id,
            subject_name="Maths",
            user_id=user_id
        )
        print("Success!")
        print(response)
    except Exception as e:
        print("\n!!! CAUGHT ERROR !!!")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    if "GEMINI_API_KEY" not in os.environ:
        print("Error: GEMINI_API_KEY not set in environment.")
    else:
        asyncio.run(debug_qa())
