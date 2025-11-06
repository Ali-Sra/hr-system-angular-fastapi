from pydantic import BaseModel
from datetime import date
from typing import Optional

class AbteilungBase(BaseModel):
    name: str
class AbteilungCreate(AbteilungBase):
    pass
class Abteilung(AbteilungBase):
    id: int
    class Config:
        orm_mode = True

class PositionBase(BaseModel):
    titel: str
class Position(PositionBase):
    id: int
    class Config:
        orm_mode = True

class AutoBase(BaseModel):
    kennzeichen: str
    modell: str
class Auto(AutoBase):
    id: int
    class Config:
        orm_mode = True

class RaumBase(BaseModel):
    name: str
    kapazitaet: int
class Raum(RaumBase):
    id: int
    class Config:
        orm_mode = True

class MitarbeiterBase(BaseModel):
    vorname: str
    nachname: str
    geburtsdatum: date
    gehalt: float
    abteilung_id: int
    position_id: int
    auto_id: Optional[int] = None
    raum_id: Optional[int] = None

class MitarbeiterCreate(MitarbeiterBase):
    pass

class Mitarbeiter(MitarbeiterBase):
    id: int
    class Config:
        orm_mode = True
