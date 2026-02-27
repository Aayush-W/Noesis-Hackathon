import hashlib
import hmac
import os

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from app.core.database import get_db

router = APIRouter()

# Simple hash-based password handling (good enough for hackathon demo)
_SALT = os.environ.get("SECRET_KEY", "change-this-secret")

def _hash_password(password: str) -> str:
    return hmac.new(_SALT.encode(), password.encode(), hashlib.sha256).hexdigest()

def _make_token(user_id: str) -> str:
    return hmac.new(_SALT.encode(), user_id.encode(), hashlib.sha256).hexdigest()[:48]


class LoginBody(BaseModel):
    email: str
    password: str

class RegisterBody(BaseModel):
    name: str
    email: str
    password: str


@router.post("/register")
async def register(body: RegisterBody):
    db = get_db()
    existing = await db.users.find_one({"email": body.email.lower().strip()})
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered.")

    user_id = os.urandom(12).hex()
    user_doc = {
        "id": user_id,
        "name": body.name.strip(),
        "email": body.email.lower().strip(),
        "passwordHash": _hash_password(body.password),
    }
    await db.users.insert_one(user_doc)
    token = _make_token(user_id)

    return {
        "token": token,
        "user": {"id": user_id, "name": user_doc["name"], "email": user_doc["email"]},
    }


@router.post("/login")
async def login(body: LoginBody):
    db = get_db()
    user = await db.users.find_one({"email": body.email.lower().strip()})
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    if user["passwordHash"] != _hash_password(body.password):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    token = _make_token(user["id"])
    return {
        "token": token,
        "user": {"id": user["id"], "name": user["name"], "email": user["email"]},
    }


@router.get("/me")
async def get_me():
    # Simplified — in production you'd decode the token from headers
    return {"id": "user_123", "email": "user@example.com", "name": "Agent"}
