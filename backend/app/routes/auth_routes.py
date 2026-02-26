from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class UserLogin(BaseModel):
    email: str
    password: str

@router.post("/login")
async def login(data: UserLogin):
    # Mocking successful login for hackathon demo speed
    return {
        "access_token": "mock_token_123",
        "token_type": "bearer",
        "user": {
            "id": "user_123",
            "email": data.email,
            "name": "Hackathon User"
        }
    }

@router.get("/me")
async def get_me():
    return {
        "id": "user_123",
        "email": "user@example.com",
        "name": "Hackathon User"
    }
