import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vriend } from 'src/app/models/vriend.model';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class VriendService {

  
  constructor(private http: HttpClient) { }

  getVrienden(): Observable<Vriend[]> {
    return this.http.get<Vriend[]>("https://localhost:44314/api/Vriend");
  }

  getVerzoeken(): Observable<Vriend[]> {
    return this.http.get<Vriend[]>("https://localhost:44314/api/Vriend/getVerzoeken");
  }

  getNietVrienden(): Observable<Vriend[]> {
    return this.http.get<Vriend[]>("https://localhost:44314/api/Vriend/getNietVrienden");
  }

  addVriend(vriend: Vriend) {
    return this.http.post<Vriend>("https://localhost:44314/api/vriend", vriend);
  }

  accepteerVerzoek(vriendID: number, vriend: Vriend) {
    return this.http.put<Vriend>("https://localhost:44314/api/vriend/accepteerVerzoek/" + vriendID, vriend);
  }

  updateVriend(vriendID: number, vriend: Vriend) {
    return this.http.put<Vriend>("https://localhost:44314/api/vriend/" + vriendID, vriend);
  }

  deleteVriend(vriendID: number) {
    return this.http.delete<Vriend>("https://localhost:44314/api/vriend/" + vriendID);
  }
  verwijderVerzoek(vriendID: number) {
    return this.http.delete<Vriend>("https://localhost:44314/api/vriend/verwijderVerzoek/" + vriendID);
  }
}
