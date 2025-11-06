import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mitarbeiter {
  mitarbeiter_id?: number;
  vorname: string;
  nachname: string;
  geburtstag: string;
  abteilung_id: number;
  position_id: number;
  gehalt_id: number;
  address_id: number;
  arbeitszeitform_id: number;
}

@Injectable({ providedIn: 'root' })
export class MitarbeiterService {
  private api = 'http://127.0.0.1:8000/mitarbeiter';

  constructor(private http: HttpClient) {}

  list(): Observable<Mitarbeiter[]> {
    return this.http.get<Mitarbeiter[]>(`${this.api}/`);
  }

  create(m: Mitarbeiter): Observable<Mitarbeiter> {
    return this.http.post<Mitarbeiter>(`${this.api}/`, m);
  }

  update(id: number, m: Mitarbeiter): Observable<Mitarbeiter> {
    return this.http.put<Mitarbeiter>(`${this.api}/${id}`, m);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
