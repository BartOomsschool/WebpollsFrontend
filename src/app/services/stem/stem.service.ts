import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stem } from '../../models/stem.model';

@Injectable({
  providedIn: 'root'
})

export class StemService {
  
  constructor(private http: HttpClient) { }

  getStemmen(): Observable<Stem[]> {
      return this.http.get<Stem[]>("https://localhost:44314/api/Stem");
  }

  getStemmenPerAntwoord(antwoordID: number): Observable<Stem[]> {
    return this.http.get<Stem[]>("https://localhost:44314/api/stem/stemmenPerAntwoord/" + antwoordID);
}

  addStem(stemID: number) {
      return this.http.post<Stem>("https://localhost:44314/api/stem", stemID);
  }

  updateStem(stemID: number, stem: Stem) {
      return this.http.put<Stem>("https://localhost:44314/api/stem/" + stemID, stem);
  }

  deleteStem(stemID: number) {
      return this.http.delete<Stem>("https://localhost:44314/api/stem/" + stemID);
  }
}
