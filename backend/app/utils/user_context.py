from fastapi import Request

DEFAULT_USER_ID = "user_123"
USER_ID_HEADER = "x-user-id"


def resolve_user_id(request: Request) -> str:
    """
    Resolve user ID from request headers with a safe demo fallback.
    """
    header_value = request.headers.get(USER_ID_HEADER, "").strip()
    return header_value or DEFAULT_USER_ID
