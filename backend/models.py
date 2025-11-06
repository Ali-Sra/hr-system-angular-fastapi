from sqlalchemy import Column, Integer, String, ForeignKey, Date, Float
from sqlalchemy.orm import relationship
from .database import Base

class Abteilung(Base):
    __tablename__ = "abteilung"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)
    mitarbeiter = relationship("Mitarbeiter", back_populates="abteilung")

class Position(Base):
    __tablename__ = "position"
    id = Column(Integer, primary_key=True, index=True)
    titel = Column(String, nullable=False)
    mitarbeiter = relationship("Mitarbeiter", back_populates="position")

class Auto(Base):
    __tablename__ = "auto"
    id = Column(Integer, primary_key=True, index=True)
    kennzeichen = Column(String, unique=True)
    modell = Column(String)
    mitarbeiter = relationship("Mitarbeiter", back_populates="auto")

class Raum(Base):
    __tablename__ = "raum"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    kapazitaet = Column(Integer)
    mitarbeiter = relationship("Mitarbeiter", back_populates="raum")

class Mitarbeiter(Base):
    __tablename__ = "mitarbeiter"
    id = Column(Integer, primary_key=True, index=True)
    vorname = Column(String)
    nachname = Column(String)
    geburtsdatum = Column(Date)
    gehalt = Column(Float)

    abteilung_id = Column(Integer, ForeignKey("abteilung.id"))
    position_id = Column(Integer, ForeignKey("position.id"))
    auto_id = Column(Integer, ForeignKey("auto.id"))
    raum_id = Column(Integer, ForeignKey("raum.id"))

    abteilung = relationship("Abteilung", back_populates="mitarbeiter")
    position = relationship("Position", back_populates="mitarbeiter")
    auto = relationship("Auto", back_populates="mitarbeiter")
    raum = relationship("Raum", back_populates="mitarbeiter")
