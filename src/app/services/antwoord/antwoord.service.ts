import { Injectable } from '@angular/core';
import { Antwoord } from '../../models/antwoord.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AntwoordService {

  constructor(private http: HttpClient) { }

  getAntwoorden(): Observable<Antwoord[]> {
      return this.http.get<Antwoord[]>("https://localhost:44314/api/Antwoord");
  }

  getAntwoordenPoll(pollID: number): Observable<Antwoord[]> {
    return this.http.get<Antwoord[]>("https://localhost:44314/api/antwoord/" + pollID);
}


  addAntwoord(antwoord: Antwoord) {
      return this.http.post<Antwoord>("https://localhost:44314/api/antwoord", antwoord);
  }

  updateAntwoord(antwoordID: number, antwoord: Antwoord) {
      return this.http.put<Antwoord>("https://localhost:44314/api/antwoord/" + antwoordID, antwoord);
  }

  deleteAntwoord(antwoordID: number) {
      return this.http.delete<Antwoord>("https://localhost:44314/api/antwoord/" + antwoordID);
  }
}
