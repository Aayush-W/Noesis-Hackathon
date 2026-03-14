import logging
from fastapi import APIRouter, HTTPException, Request

from app.services.study_service import generate_quiz
from app.utils.user_context import resolve_user_id

logger = logging.getLogger(__name__)
router = APIRouter()

@router.post("/generate/{subject_id}")
async def generate_study_test(subject_id: str, request: Request):
    user_id = resolve_user_id(request)
    try:
        response = await generate_quiz(subject_id, user_id)
        if "error" in response:
            raise HTTPException(status_code=500, detail=response["error"])
        return response
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.exception("Unexpected mission generation error")
        raise HTTPException(status_code=500, detail="Internal server error")
