# AskMyNotes: Strict Subject-Scoped Study Copilot

AskMyNotes is an intelligent, strictly scoped, hallucination-free study copilot designed to help students learn effectively based **only** on the notes they provide. Built for the Noesis Hackathon, this application strictly adheres to the constraint of answering questions exclusively from user-uploaded documents, completely eliminating LLM hallucinations.

## 🚀 Features & Core Functionality

### Phase 1: Strict Subject-Scoped Copilot
- **Exactly 3 Fixed Subjects**: The workspace is strictly partitioned into `Physics`, `Chemistry`, and `Maths`. 
- **Contextual Isolation**: When a subject is selected, all document uploads, study material generation, and Q&A interactions are strictly sandboxed to that specific subject's vector space.
- **Strict Anti-Hallucination Q&A**: If a student asks a questioned not covered in the uploaded notes for that subject, the system forcibly responds with *"Not found in your notes for [Subject]"*.
- **Pre-Computed Confidence & Citations**: Every answer includes:
  - A mathematically computed Confidence Tier (HIGH, MEDIUM, LOW, NOT_FOUND) based on vector retrieval similarity and consistency.
  - Inline source citations mapping back to the exact file and semantic location `[SOURCE: FileName | Page]`.
  - An expandable drawer exposing the raw Top Supporting Evidence Snippets extracted from the document.
- **1-Click Study Mode**: Automatically generates exactly 5 Multiple Choice Questions (with correct/incorrect logic) and 3 Short Answer Questions (with model answers) directly derived from the uploaded subject notes.

### Phase 2: Advanced Voice & Multi-Turn Interactions
- **Voice-Enabled Q&A (STT & TTS)**: Students can ask questions using their microphone (Speech-to-Text). The copilot replies both in text and speaks the answer out loud like a real teacher (Text-to-Speech).
- **Multi-Turn Contextual Memory**: The RAG pipeline intelligently remembers the last 5 turns of the conversation. Students can ask follow-up questions like *"Can you simplify that?"* or *"Give me an example of it"*, and the system resolves the context while still strictly answering **only** from the source notes.
- **Intelligent Document Processing Pipeline**:
  - **Vision OCR Fallback**: Automatically extracts text from both standard PDFs/TXTs and scanned/image-based documents using Gemini Flash Vision.
  - **Dynamic Semantic Chunking**: Intelligently chunks documents while preserving contextual overlap.
  - **ChromaDB Vector Retrieval**: Stores and queries embeddings using state-of-the-art vector similarity matching.

---

## 🛠 Tech Stack

Our approach completely decouples the heavy AI orchestration from the reactive UI.

### Frontend
- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS (Vanilla CSS approach for a modern, dark-mode, glassmorphism aesthetic)
- **Icons**: Lucide React
- **Voice**: Browser Native Web Speech API (`SpeechRecognition` & `SpeechSynthesis`)
- **API Client**: Axios

### Backend
- **Framework**: FastAPI (Python)
- **AI/LLM**: Google Gemini (`gemini-1.5-pro` for strict answering, `gemini-1.5-flash` for rapid OCR, query expansion, and re-ranking)
- **Vector Database**: ChromaDB (Local persistent storage)
- **Document DB**: MongoDB (Stores metadata, chunk texts, and QA logs)
- **Embeddings**: `text-embedding-004` (Google GenAI)

### Architecture Approach
We chose a **Retrieval-Augmented Generation (RAG)** architecture with custom guardrails. 
1. **Multi-Query Expansion**: User queries are expanded into 3 semantic variations to ensure high recall from the vector database.
2. **Contextual Synthesizer**: Retrieved chunks are re-ranked, passed through a strict prompt template, and forced to cite locations.
3. **Stateless Frontend, Stateful Backend**: The frontend handles STT/TTS and UI rendering, while the backend FastAPI securely manages ChromaDB collections, MongoDB records, and Gemini API interactions.

---

## 💻 Running the Application Locally

### Prerequisites
- Node.js (v18+)
- Python (3.11+)
- MongoDB (Running locally on default port `27017`)
- Google Gemini API Key

### Backend Setup (FastAPI)
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure Environment Variables:
   Open the `/backend/.env` file and insert your Gemini API key:
   ```env
   GEMINI_API_KEY="your_api_key_here"
   MONGO_URI="mongodb://localhost:27017"
   DB_NAME="noesis_db"
   ```
5. Run the ASGI server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   *The backend will be available at `http://localhost:8000`. You can view interactive API docs at `http://localhost:8000/docs`.*

### Frontend Setup (React/Vite)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Environment Variables:
   Ensure the frontend connects to the real backend API by creating a `.env` file in the frontend folder (or checking `qaApi.ts`) to ensure mock data is disabled:
   ```env
   VITE_USE_REAL_API="true"
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:5173`.

---

## 🎯 Use Cases
- **Exam Preparation (Study Mode)**: A student uploads their semester notes for Biology. They click "Generate Study Material" to immediately test themselves with bespoke 5 MCQs and 3 SAQs, seeing exactly where they went wrong based on their own notes.
- **Complex Concept Breakdown (Multi-Turn Chat)**: A student uploads a dense Physics paper. They say into their microphone, *"What is quantum entanglement?"* After the copilot reads the explanation, the student follows up with, *"I didn't understand that, can you simplify it?"* The copilot remembers the context and breaks it down using simpler excerpts from the same text.
- **Curbing Misinformation (Strict Scoping)**: A student asks a history question inside their Chemistry workspace. The app successfully blocks the LLM from hallucinating an answer from its training data, returning "Not found in your notes for Chemistry."

---

## Deployment Quickstart

### Option A: Docker Compose (full stack)

1. Add secrets in root shell (PowerShell example):
   ```powershell
   $env:GEMINI_API_KEY="your_real_key"
   $env:SECRET_KEY="replace_with_long_secret"
   ```
2. Build and start:
   ```bash
   docker compose up --build
   ```
3. Open:
   - Frontend: `http://localhost:5173`
   - Backend docs: `http://localhost:8000/docs`

### Option B: Local dev with env templates

1. Copy env templates:
   - `backend/.env.example` -> `backend/.env`
   - `frontend/.env.example` -> `frontend/.env`
2. Start backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload --port 8000
   ```
3. Start frontend:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Health and ingestion endpoints

- Basic health: `GET /health`
- Readiness with checks: `GET /health/ready`
- File upload and indexing: `POST /api/v1/upload`
- URL scraping + indexing: `POST /api/v1/upload/url`
