import { Component, OnInit, signal } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

interface Abteilung { id: number; name: string; }
interface Position { id: number; titel: string; }
interface Arbeitszeit { id: number; bezeichnung: string; }
interface Adresse { id: number; strasse: string; plz: string; stadt: string; land: string; }
interface Versicherung { id: number; name: string; typ: string; gueltig_bis: string; }
interface Auto { id: number; kennzeichen: string; modell: string; }
interface Raum { id: number; name: string; kapazitaet: number; }

interface MitarbeiterModel {
  id: number;
  vorname: string;
  nachname: string;
  geburtsdatum: string;
  abteilung: Abteilung;
  position: Position;
  gehalt: number;
  arbeitszeit: Arbeitszeit;
  adresse: Adresse;
  versicherung: Versicherung;
  auto: Auto;
  raum: Raum;
}

@Component({
  selector: 'app-mitarbeiter',
  standalone: true,
  imports: [CommonModule, DecimalPipe, NgFor],
  templateUrl: './mitarbeiter.html',
  styleUrls: ['./mitarbeiter.scss']
})
export class MitarbeiterComponent implements OnInit {

  mitarbeiterList = signal<MitarbeiterModel[]>([]);

  ngOnInit() {
    this.loadDemoData();
  }

  private loadDemoData() {
    const demo: MitarbeiterModel[] = [
      {
        id: 1,
        vorname: 'Ali',
        nachname: 'Seraji',
        geburtsdatum: '1992-08-15',
        abteilung: { id: 1, name: 'IT' },
        position: { id: 1, titel: 'Fullstack Entwickler' },
        gehalt: 4800,
        arbeitszeit: { id: 1, bezeichnung: 'Vollzeit (40h/Woche)' },
        adresse: { id: 1, strasse: 'Berliner Str. 12', plz: '21073', stadt: 'Hamburg', land: 'Deutschland' },
        versicherung: { id: 1, name: 'AOK NordWest', typ: 'Krankenversicherung', gueltig_bis: '2026-12-31' },
        auto: { id: 1, kennzeichen: 'HH-AB-1234', modell: 'VW Passat' },
        raum: { id: 1, name: 'Raum 203', kapazitaet: 4 }
      },
      {
        id: 2,
        vorname: 'Leyla',
        nachname: 'Ahmadi',
        geburtsdatum: '1994-03-12',
        abteilung: { id: 2, name: 'HR' },
        position: { id: 2, titel: 'HR Managerin' },
        gehalt: 5200,
        arbeitszeit: { id: 2, bezeichnung: 'Teilzeit (30h/Woche)' },
        adresse: { id: 2, strasse: 'Mönckebergstr. 22', plz: '20095', stadt: 'Hamburg', land: 'Deutschland' },
        versicherung: { id: 2, name: 'TK', typ: 'Krankenversicherung', gueltig_bis: '2025-06-30' },
        auto: { id: 2, kennzeichen: 'HH-XY-9876', modell: 'Audi A3' },
        raum: { id: 2, name: 'Raum 105', kapazitaet: 2 }
      },
      {
        id: 3,
        vorname: 'Sven',
        nachname: 'Becker',
        geburtsdatum: '1988-06-05',
        abteilung: { id: 3, name: 'Finanzen' },
        position: { id: 3, titel: 'Controller' },
        gehalt: 4600,
        arbeitszeit: { id: 3, bezeichnung: 'Vollzeit (40h/Woche)' },
        adresse: { id: 3, strasse: 'Fuhlsbüttler Str. 10', plz: '22305', stadt: 'Hamburg', land: 'Deutschland' },
        versicherung: { id: 3, name: 'DAK Gesundheit', typ: 'Krankenversicherung', gueltig_bis: '2027-01-01' },
        auto: { id: 3, kennzeichen: 'HH-FB-2244', modell: 'Mercedes C200' },
        raum: { id: 3, name: 'Raum 310', kapazitaet: 6 }
      }
    ];
    this.mitarbeiterList.set(demo);
  }
}
