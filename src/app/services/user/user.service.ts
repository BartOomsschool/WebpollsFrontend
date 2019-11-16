import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
      return this.http.get<User[]>("https://localhost:44314/api/User", {
        headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
        }); 
  }

  addUser(user: User) {
      return this.http.post<User>("https://localhost:44314/api/user", user);
  }

  validateUserNaam(user: User) {
    return this.http.post<User>("https://localhost:44314/api/user/validateUserNaam", user);

}

  updateUser(userID: number, user: User) {
      return this.http.put<User>("https://localhost:44314/api/user/" + userID, user);
  }

  deleteUser(userID: number) {
      return this.http.delete<User>("https://localhost:44314/api/user/" + userID);
  }
}
