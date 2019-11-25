import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from '../../models/poll.model';
import { User } from 'src/app/models/user.model';


@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }

  getPolls(): Observable<Poll[]> {
      return this.http.get<Poll[]>("https://localhost:44314/api/Poll");
  }

  getPoll(pollID: number):Observable<Poll> {
    return this.http.get<Poll>("https://localhost:44314/api/poll/" + pollID);
  }

  addPoll(poll: Poll) {
      return this.http.post<Poll>("https://localhost:44314/api/poll", poll);
  }

  updatePoll(pollID: number, poll: Poll) {
      return this.http.put<Poll>("https://localhost:44314/api/poll/" + pollID, poll);
  }

  deletePoll(pollID: number) {
      return this.http.delete<Poll>("https://localhost:44314/api/poll/" + pollID);
  }
}
