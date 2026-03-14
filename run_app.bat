@echo off
echo ==========================================
echo   AskMyNotes - Launching Application
echo ==========================================

:: Start Backend in a new window
echo [+] Starting Backend on http://localhost:8000
start "AskMyNotes-Backend" cmd /k "cd backend && call venv\Scripts\activate && uvicorn app.main:app --reload --port 8000"

:: Start Frontend in a new window
echo [+] Starting Frontend on http://localhost:5173
start "AskMyNotes-Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ==========================================
echo   BOTH SERVICES ARE STARTING...
echo ==========================================
echo 1. Backend: http://localhost:8000/docs
echo 2. Frontend: http://localhost:5173
echo.
echo Keep this window open or close it once services start.
echo ==========================================
timeout /t 5
