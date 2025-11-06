from sqlalchemy.orm import Session
from . import models, schemas

def get_mitarbeiter(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Mitarbeiter).offset(skip).limit(limit).all()

def create_mitarbeiter(db: Session, mitarbeiter: schemas.MitarbeiterCreate):
    db_item = models.Mitarbeiter(**mitarbeiter.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item

def delete_mitarbeiter(db: Session, mitarbeiter_id: int):
    db_item = db.query(models.Mitarbeiter).filter(models.Mitarbeiter.id == mitarbeiter_id).first()
    if db_item:
        db.delete(db_item)
        db.commit()
        return True
    return False
