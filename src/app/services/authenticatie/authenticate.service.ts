import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Observable, BehaviorSubject  } from 'rxjs';
import { UserLogin } from '../../models/user-login.model';


@Injectable({
  providedIn: 'root'
})


export class AuthenticateService {

  isLoggedin = new BehaviorSubject(false);
  
  constructor(private _httpClient: HttpClient) { }

  
  authenticate(userLogin: UserLogin): Observable<User> {
    return this._httpClient.post<User>("https://localhost:44314/api/User/authenticate", userLogin);
  }
} 