import { Routes } from '@angular/router';
import { MitarbeiterComponent } from './components/mitarbeiter/mitarbeiter';
import { Abteilung } from './components/abteilung/abteilung';
import { Projekt } from './components/projekt/projekt';
import { Position } from './components/position/position';
import { Auto } from './components/auto/auto';
import { Raum } from './components/raum/raum';
import { Arbeitszeit } from './components/arbeitszeit/arbeitszeit';
import { Gehalt } from './components/gehalt/gehalt';
import { Versicherung } from './components/versicherung/versicherung';
import { Adresse } from './components/adresse/adresse';
import { Zertifikat } from './components/zertifikat/zertifikat';
import { AutoReservierung } from './components/auto-reservierung/auto-reservierung';
import { RaumReservierung } from './components/raum-reservierung/raum-reservierung';
import { MitarbeiterProjekt } from './components/mitarbeiter-projekt/mitarbeiter-projekt';
import { MitarbeiterZertifikat } from './components/mitarbeiter-zertifikat/mitarbeiter-zertifikat';
import { MitarbeiterVersicherung } from './components/mitarbeiter-versicherung/mitarbeiter-versicherung';

export const routes: Routes = [
  { path: '', redirectTo: 'mitarbeiter', pathMatch: 'full' },
  { path: 'mitarbeiter', component: MitarbeiterComponent },
  { path: 'abteilung', component: Abteilung },
  { path: 'projekt', component: Projekt },
  { path: 'position', component: Position },
  { path: 'auto', component: Auto },
  { path: 'raum', component: Raum },
  { path: 'arbeitszeit', component: Arbeitszeit },
  { path: 'gehalt', component: Gehalt },
  { path: 'versicherung', component: Versicherung },
  { path: 'adresse', component: Adresse },
  { path: 'zertifikat', component: Zertifikat },
  { path: 'auto-reservierung', component: AutoReservierung },
  { path: 'raum-reservierung', component: RaumReservierung },
  { path: 'mitarbeiter-projekt', component: MitarbeiterProjekt },
  { path: 'mitarbeiter-zertifikat', component: MitarbeiterZertifikat },
  { path: 'mitarbeiter-versicherung', component: MitarbeiterVersicherung },
];
