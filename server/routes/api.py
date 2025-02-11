from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def api_home():
    return {"message": "API is working"}
