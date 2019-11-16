import { Component, OnInit } from '@angular/core';
import { Poll } from '../../models/poll.model';
import { PollService } from '../../services/poll/poll.service';
import { Router } from '@angular/router';
import { VriendService } from '../../services/vriend/vriend.service';
import { VriendUserService } from '../../services/vriendUser/vriend-user.service';
import { Vriend } from 'src/app/models/vriend.model';
import { StemService } from 'src/app/services/stem/stem.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PollService, VriendService, VriendUserService]
})
export class HomeComponent implements OnInit {

  polls: Poll[];
  verzoeken: Vriend[];
  test = false;

  constructor(private _pollService: PollService, private router: Router, private _vriendenService: VriendService, private _vriendenUserService: VriendUserService, private _stemService: StemService) {
    this.getPolls();
    this.getVerzoeken();
  }

  getPolls() {
    this._pollService.getPolls().subscribe(p => {
      this.polls = p;
      console.log('polls: ',this.polls);
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
