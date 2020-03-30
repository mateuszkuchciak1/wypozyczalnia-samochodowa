import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Samochod } from 'src/app/samochody/models/samochod';
import { Rezerwacja } from 'src/app/samochody/models/rezerwacja';
import { Klient } from 'src/app/samochody/models/klient';

@Injectable({
  providedIn: 'root'
})
export class SamochodSerwisService {
  private apiURL = '/samochody';
  private apiURL_2 = '/rezerwacja';
  private apiURL_3 = '/kontakt';
  constructor(private db: AngularFireDatabase) { }

  getSamochod(): Observable<Samochod[]> {
    return this.db.list<any>(this.apiURL).snapshotChanges()
      .pipe(map(response => response.map(samochody => this.assignKey(samochody))));
  }

  addRezerwacja(rezerwacja: Rezerwacja) {
    return this.db.list<Rezerwacja>(this.apiURL_2).push(rezerwacja);
  }

  addKontakt(kontakt: Klient) {
    return this.db.list<Klient>(this.apiURL_3).push(kontakt);
  }

  // getSamochody(key: string): Observable<samochody> {
  //   return this.db.object<samochody>(`${this.API_URL}/${key}`).snapshotChanges()
  //     .pipe(map(flight => this.assignKey(flight)));
  // }

  private assignKey(flight) {
    return { ...flight.payload.val(), key: flight.key };
  }

}

