# Nexus Hepta AI
**AI Documentation & Accreditation Copilot**

Seven intelligent capabilities. One connected documentation platform.

## Quick Start

### 1. Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env → set GEMINI_API_KEY=your_key
uvicorn app.main:app --reload --port 8000