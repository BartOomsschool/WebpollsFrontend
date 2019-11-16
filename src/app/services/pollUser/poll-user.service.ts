import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PollUser } from '../../models/poll-User.model';


@Injectable({
  providedIn: 'root'
})

export class PollUserService {

  constructor(private http: HttpClient) { }

  getPollUsers(): Observable<PollUser[]> {
    return this.http.get<PollUser[]>("https://localhost:44314/api/PollUser");
  }

  addPollUser(pollUser: PollUser) {
    return this.http.post<PollUser>("https://localhost:44314/api/pollUser", pollUser);
  }

  updatePollUser(pollUserID: number, pollUser: PollUser) {
    return this.http.put<PollUser>("https://localhost:44314/api/pollUser/" + pollUserID, pollUser);
  }

  deletePollUser(pollUserID: number) {
    return this.http.delete<PollUser>("https://localhost:44314/api/pollUser/" + pollUserID);
  }

  verwijderUserVanPoll(vriendID: number,pollID: number) {
    return this.http.delete<PollUser>("https://localhost:44314/api/pollUser/verwijderUserVanPoll/" + vriendID + "/" + pollID );
  }
}
