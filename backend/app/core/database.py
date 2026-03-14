"""
Firebase-only stub for database.py.
The original MongoDB/motor implementation has been replaced by Firebase Firestore.
This module is kept for import compatibility — routes that import `get_db` will
receive a no-op (None), as they now call `firestore.client()` directly.
"""
from __future__ import annotations


def get_db():
    """Compatibility shim — upstream routes now use firebase_admin.firestore.client() directly."""
    return None


def get_database():
    return None
