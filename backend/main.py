from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from . import models, schemas, crud
from .database import SessionLocal, engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(title="HR-System API")

# اجازه دسترسی به Angular Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/mitarbeiter", response_model=list[schemas.Mitarbeiter])
def read_mitarbeiter(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_mitarbeiter(db, skip=skip, limit=limit)

@app.post("/mitarbeiter", response_model=schemas.Mitarbeiter)
def create_new_mitarbeiter(mitarbeiter: schemas.MitarbeiterCreate, db: Session = Depends(get_db)):
    return crud.create_mitarbeiter(db, mitarbeiter)

@app.delete("/mitarbeiter/{mitarbeiter_id}")
def delete_mitarbeiter(mitarbeiter_id: int, db: Session = Depends(get_db)):
    success = crud.delete_mitarbeiter(db, mitarbeiter_id)
    if not success:
        raise HTTPException(status_code=404, detail="Mitarbeiter not found")
    return {"message": "Mitarbeiter deleted"}
