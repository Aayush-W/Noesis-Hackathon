from fastapi import Request
from firebase_admin import auth

DEFAULT_USER_ID = "user_123"

from fastapi import HTTPException, status

def resolve_user_id(request: Request) -> str:
    """
    Resolve user ID from Firebase Bearer token.
    Raises 401 Unauthorized if token is missing or invalid.
    """
    auth_header = request.headers.get("Authorization")
    if auth_header and auth_header.startswith("Bearer "):
        token = auth_header.split(" ")[1]
        try:
            decoded_token = auth.verify_id_token(token)
            return decoded_token.get("uid")
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail=f"Invalid authentication credentials: {e}"
            )
            
    # Allow local development fallback only if explicit environment var is set
    import os
    if os.environ.get("USE_DUMMY_AUTH") == "true":
        return DEFAULT_USER_ID
        
    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Missing or invalid authentication credentials"
    )
