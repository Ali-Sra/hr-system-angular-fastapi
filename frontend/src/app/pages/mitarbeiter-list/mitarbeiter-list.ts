import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MitarbeiterService, Mitarbeiter } from '../../services/mitarbeiter.service';

@Component({
  selector: 'app-mitarbeiter-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Mitarbeiter Verwaltung</h2>

    <form (ngSubmit)="save()" class="form">
      <input [(ngModel)]="form.vorname" name="vorname" placeholder="Vorname" required>
      <input [(ngModel)]="form.nachname" name="nachname" placeholder="Nachname" required>
      <input [(ngModel)]="form.geburtstag" name="geburtstag" placeholder="YYYY-MM-DD" required>
      <input [(ngModel)]="form.abteilung_id" name="abteilung_id" placeholder="Abteilung ID" type="number">
      <input [(ngModel)]="form.position_id" name="position_id" placeholder="Position ID" type="number">
      <input [(ngModel)]="form.gehalt_id" name="gehalt_id" placeholder="Gehalt ID" type="number">
      <input [(ngModel)]="form.address_id" name="address_id" placeholder="Address ID" type="number">
      <input [(ngModel)]="form.arbeitszeitform_id" name="arbeitszeitform_id" placeholder="Arbeitszeitform ID" type="number">
      <button type="submit">{{editing ? 'Aktualisieren' : 'Hinzufügen'}}</button>
      <button type="button" (click)="reset()">Abbrechen</button>
    </form>

    <ul>
      <li *ngFor="let m of list">
        {{m.mitarbeiter_id}} - {{m.vorname}} {{m.nachname}} ({{m.geburtstag}})
        <button (click)="edit(m)">Bearbeiten</button>
        <button (click)="remove(m.mitarbeiter_id!)">Löschen</button>
      </li>
    </ul>
  `,
  styles: [`
    .form { margin-bottom: 20px; }
    input { margin: 3px; padding: 5px; }
    button { margin-left: 5px; }
  `]
})
export class MitarbeiterListComponent implements OnInit {
  list: Mitarbeiter[] = [];
  form: Mitarbeiter = {
    vorname: '', nachname: '', geburtstag: '',
    abteilung_id: 1, position_id: 1, gehalt_id: 1, address_id: 1, arbeitszeitform_id: 1
  };
  editing = false;
  editId?: number;

  constructor(private svc: MitarbeiterService) {}

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.svc.list().subscribe(data => this.list = data);
  }

  save() {
    if (this.editing && this.editId) {
      this.svc.update(this.editId, this.form).subscribe(() => this.reload());
    } else {
      this.svc.create(this.form).subscribe(() => this.reload());
    }
    this.reset();
  }

  edit(m: Mitarbeiter) {
    this.form = { ...m };
    this.editing = true;
    this.editId = m.mitarbeiter_id;
  }

  remove(id: number) {
    this.svc.delete(id).subscribe(() => this.reload());
  }

  reset() {
    this.form = {
      vorname: '', nachname: '', geburtstag: '',
      abteilung_id: 1, position_id: 1, gehalt_id: 1, address_id: 1, arbeitszeitform_id: 1
    };
    this.editing = false;
  }
}
