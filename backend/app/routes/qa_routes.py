from datetime import datetime
import uuid

from fastapi import APIRouter, HTTPException, Request

from app.core.database import get_db
from app.schemas.qa_schema import QARequest, QAResponse
from app.services.rag_service import ask_question
from app.utils.user_context import resolve_user_id

router = APIRouter()


@router.post("/", response_model=QAResponse)
async def ask(request: QARequest, http_request: Request):
    db = get_db()
    user_id = resolve_user_id(http_request)

    subject = await db.subjects.find_one({"id": request.subjectId, "userId": user_id})
    if not subject:
        raise HTTPException(status_code=404, detail="Subject not found")

    try:
        result = await ask_question(
            query=request.query,
            subject_id=request.subjectId,
            subject_name=subject["name"],
            user_id=user_id,
            history=request.history,
        )

        log_entry = {
            "id": str(uuid.uuid4()),
            "userId": user_id,
            "subjectId": request.subjectId,
            "query": request.query,
            "answer": result["answer"],
            "confidenceTier": result["confidenceTier"],
            "confidenceScore": result["confidenceScore"],
            "citations": result.get("citations", []),
            "evidenceSnippets": result.get("evidenceSnippets", []),
            "topChunkIds": result.get("topChunkIds", []),
            "createdAt": datetime.utcnow(),
        }
        await db.qa_logs.insert_one(log_entry)

        return QAResponse(**result)
    except HTTPException:
        raise
    except Exception as error:
        raise HTTPException(status_code=500, detail=str(error))
