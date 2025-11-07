<p align="center">
  <img src="https://raw.githubusercontent.com/Ali-Sra/hr-system-angular-fastapi/main/backend/erd-diagram.png" width="850" alt="ERD Diagram">
</p>


# 🧩 HR-System Angular + FastAPI – Version 1.0.0

Ein vollständiges HR-Verwaltungssystem mit **Angular 17** (Frontend) und **FastAPI + SQLAlchemy** (Backend).  
Das Projekt ermöglicht die Verwaltung von **Mitarbeitern, Abteilungen, Positionen, Arbeitszeiten, Autos, Räumen, Projekten, Versicherungen und Zertifikaten.**

> Full-Stack HR-Management-System built with **Angular 17 (standalone)** and **FastAPI + SQLAlchemy** backend for employee, department, and resource management.

---

## 🧰 Technologien

### 🔹 Frontend
- **Angular 17 (Standalone Components)**
- **TypeScript + Signals**
- **HTML / SCSS**
- **Vite + ESBuild + Router**

### 🔹 Backend
- **Python 3.10+**
- **FastAPI + SQLAlchemy**
- **Uvicorn ASGI Server**
- **SQLite (Demo-DB)** oder **PostgreSQL** in Produktion

---

## ⚙️ Installation

### 🔹 Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
# source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
uvicorn main:app --reload
