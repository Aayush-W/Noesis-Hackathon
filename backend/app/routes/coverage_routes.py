from fastapi import APIRouter, HTTPException
from app.services.heatmap_service import generate_heatmap

router = APIRouter()

@router.get("/{subject_id}")
async def get_subject_heatmap(subject_id: str):
    try:
        heatmap = await generate_heatmap(subject_id)
        return heatmap
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
