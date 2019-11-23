import { Component, OnInit } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { PollService } from '../../services/poll/poll.service';
import { Router } from '@angular/router';
import { VriendService } from '../../services/vriend/vriend.service';
import { Vriend } from 'src/app/models/vriend.model';
import { HeaderComponent } from 'src/app/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PollService, VriendService]
})
export class HomeComponent implements OnInit {

  polls: Poll[];
  gestemdPoll: Poll[] = [];
  nieuwPoll: Poll[] = [];
  verzoeken: Vriend[];
  lengteVerzoeken: number;
  lengteNieuwPoll: number;
  lengteGestemdPoll: number;
  test = false;

  constructor(private _pollService: PollService, private router: Router, private _vriendenService: VriendService) {
    this.getPolls();
    this.getVerzoeken();
  }

  getPolls() {
    this._pollService.getPolls().subscribe(p => {
      this.polls = p;

      this.polls.map(poll => {
            if(poll.gestemd){
              this.gestemdPoll.push(poll);
            }
            else {
              this.nieuwPoll.push(poll);
            }
      });
      this.lengteNieuwPoll = this.nieuwPoll.length;
      this.lengteGestemdPoll = this.gestemdPoll.length;
      console.log('polls: ', this.polls);
    });
  }
  overzichtPoll(pollID: number){
    this.router.navigate(['overzichtStemmen', pollID]);
  }

  deletePoll(id: number) {
    this._pollService.deletePoll(id).subscribe(result => {
      this.getPolls();
    });
  }

  stemOpPoll(id: number) {
    this.router.navigate(['antwoorden', id]);
    console.log(id);
  }

  aanmakenPoll() {
    this.router.navigate(['pollMaken']);
  }

  VriedenLijst() {
    this.router.navigate(['vriendenLijst']);
  }

  getVerzoeken() {
    this._vriendenService.getVerzoeken().subscribe(result => {
      this.verzoeken = result;
      this.lengteVerzoeken = result.length;
      console.log(result);
    });
  }

  accepteerVerzoek(vriend: Vriend) {
    console.log(vriend);
    this._vriendenService.accepteerVerzoek(vriend.vriendID, vriend).subscribe(result => {
      console.log(result);
      this.getVerzoeken();
    });
  }

  verwijderVerzoek(vriend: Vriend) {
    console.log("vriendId: ", vriend.vriendID);
    this._vriendenService.verwijderVerzoek(vriend.vriendID).subscribe(result => {
      this.getVerzoeken();
    });
  }


  ngOnInit() {
  }



}
