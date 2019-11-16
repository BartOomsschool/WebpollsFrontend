import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VriendUser } from 'src/app/models/vriend-user.model';

@Injectable({
  providedIn: 'root'
})
export class VriendUserService {

  constructor(private http: HttpClient) { }

  getVriendUsers(): Observable<VriendUser[]> {
    return this.http.get<VriendUser[]>("https://localhost:44314/api/VriendUser");
  }

  getVriendUser(vriendUserID: number) {
    return this.http.get<VriendUser>("https://localhost:44314/api/VriendUser/" + vriendUserID);
  }

  addVriendUser(vriendUserID: number) {
    return this.http.post<VriendUser>("https://localhost:44314/api/vriendUser", vriendUserID);
  }

  updateVriendUser(vriendUserID: number, vriendUser: VriendUser) {
    return this.http.put<VriendUser>("https://localhost:44314/api/vriendUser/" + vriendUserID, vriendUser);
  }

  deleteVriendUser(vriendUserID: number) {
    return this.http.delete<VriendUser>("https://localhost:44314/api/vriendUser/" + vriendUserID);
  }
}
