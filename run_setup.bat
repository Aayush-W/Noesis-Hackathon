@echo off
setlocal enabledelayedexpansion

echo ==========================================
echo   AskMyNotes - Simplified Setup Script
echo ==========================================

:: 1. Check Prerequisites
echo [*] Checking prerequisites...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed. Please install Python 3.11+.
    pause
    exit /b 1
)

npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 18+.
    pause
    exit /b 1
)

:: 2. Backend Setup
echo [*] Setting up backend...
cd backend

if not exist venv (
    echo [+] Creating virtual environment...
    python -m venv venv
)

echo [+] Installing backend dependencies...
call venv\Scripts\activate
pip install -r requirements.txt

:: 3. Backend Environment Setup
if not exist .env (
    echo [+] Creating backend .env file...
    if exist .env.example (
        copy .env.example .env >nul
    ) else (
        echo PROJECT_NAME=AskMyNotes > .env
    )
    
    echo.
    set /p "KEY=Please paste your GEMINI_API_KEY: "
    echo GEMINI_API_KEY=!KEY! >> .env
    echo MONGODB_URL=mongodb://localhost:27017 >> .env
    echo DATABASE_NAME=askmynotes >> .env
    echo [+] .env configured.
)

if not exist firebase-service-account.json (
    echo [!] WARNING: backend/firebase-service-account.json is missing.
    echo Please ask your teammate for this file and place it in the \backend folder.
)

cd ..

:: 4. Frontend Setup
echo [*] Setting up frontend...
cd frontend

echo [+] Installing frontend dependencies (this may take a minute)...
call npm install

if not exist .env (
    echo [+] Creating frontend .env file...
    echo VITE_USE_REAL_API=true > .env
    echo VITE_API_URL=http://localhost:8000/api/v1 >> .env
)

cd ..

echo ==========================================
echo   SETUP COMPLETE! 
echo ==========================================
echo To start the app, run: run_app.bat
echo ==========================================
pause
