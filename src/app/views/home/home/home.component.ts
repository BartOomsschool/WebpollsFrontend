import { Component, OnInit } from '@angular/core';
import { Poll } from '../../../models/poll.model';
import { PollService } from '../../../services/poll/poll.service';
import { Router } from '@angular/router';
import { VriendService } from '../../../services/vriend/vriend.service';
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
  lengteVrienden: number = 0;
  test = false;

  constructor(private _pollService: PollService, private router: Router, private _vriendenService: VriendService) {
    this.getPolls();
    this.getVerzoeken();
    this.getVrienden();
  }

  // Deze functie haalt alle polls op van de ingelogde gebruiker.
  getPolls() {
    this._pollService.getPolls().subscribe(p => {
      this.polls = p;

      this.polls.map(poll => {
            if(poll.gestemd){
              this.gestemdPoll.push(poll);
            }
            else{
              this.nieuwPoll.push(poll);
            }
      });
      this.lengteNieuwPoll = this.nieuwPoll.length;
      this.lengteGestemdPoll = this.gestemdPoll.length;
      console.log('polls: ', this.polls);
    });
  }

  // Deze functie navigeert naar de overZichtStemmen component.
  overzichtPoll(pollID: number){
    this.router.navigate(['overzichtStemmen', pollID]);
  }
// Deze functie delete de volledig Poll wanneer de ingelogde user de admin is en delete de user van de Poll wanneer de user geen admin is van de poll.
// Nadat deze functie wordt uitgevoerd worden ook de polls opnieuw opgevraagd.
  deletePoll(id: number) {
    this._pollService.deletePoll(id).subscribe(result => {
      this.gestemdPoll = [];
      this.nieuwPoll = [];
      this.getPolls();
    });
  }
// Deze functie navigeert naar de antwoordenPoll component.
  stemOpPoll(id: number) {
    this.router.navigate(['antwoordenPoll', id]);
    console.log(id);
  }
// Deze functie navigeert naar de pollMaken component.
  aanmakenPoll() {
    this.router.navigate(['pollMaken']);
  }
// Deze functie navigeert naar de vriendenLijst component.
  VriedenLijst() {
    this.router.navigate(['vriendenLijst']);
  }
// Deze functie haalt de vriendenverzoeken op van de ingelogde user.
  getVerzoeken() {
    this._vriendenService.getVerzoeken().subscribe(result => {
      this.verzoeken = result;
      this.lengteVerzoeken = result.length;
      console.log(result);
    });
  }
// Deze functie voegt de vriend toe wanneer de ingelogde user het vriendenverzoek accepteert.
  accepteerVerzoek(vriend: Vriend) {
    console.log(vriend);
    this._vriendenService.accepteerVerzoek(vriend.vriendID, vriend).subscribe(result => {
      console.log(result);
      this.getVerzoeken();
    });
  }
// Deze functie verwijdert de vriend wanneer de ingelogde user het vriendenverzoek verwijdert.
  verwijderVerzoek(vriend: Vriend) {
    console.log('vriendId: ', vriend.vriendID);
    this._vriendenService.verwijderVerzoek(vriend.vriendID).subscribe(result => {
      this.getVerzoeken();
    });
  }
  
// Deze functie haalt de vrienden op van de ingelogde user.
  getVrienden(){
    this._vriendenService.getVrienden().subscribe(result => {
        this.lengteVrienden = result.length;
    });
  }



  ngOnInit() {
  }



}
