import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PollUserService } from 'src/app/services/pollUser/poll-user.service';
import { VriendService } from 'src/app/services/vriend/vriend.service';
import { Vriend } from 'src/app/models/vriend.model';
import { PollService } from 'src/app/services/poll/poll.service';
import { PollUser } from 'src/app/models/poll-User.model';


@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden-poll.component.html',
  styleUrls: ['./vrienden-poll.component.scss']
})
export class VriendenPollComponent implements OnInit {

  

    vriendenLijstZonderPoll: Vriend[] = [];
    pollID: number;
    pollUser: PollUser;
    naamPoll: string;
    vriendenLijstMetPoll: Vriend[] = [];
    pollUsers: PollUser[] = [];
    test: Vriend[] = [];


    constructor(private fb: FormBuilder, private router : Router, private _vriendenService: VriendService, private route: ActivatedRoute, private _pollService: PollService, private _pollUserService: PollUserService) 
    {
      this.getVriendenZonderPoll();
    }

 // deze functie haalt de vrienden op van de ingelogde user.
  getVriendenZonderPoll() {
    this._vriendenService.getVrienden().subscribe(v => {
      this.vriendenLijstZonderPoll = v;
    })
  }
// Deze functie navigeert naar de antwoordenToevoegen component.
  naarVorige(){
    this.router.navigate(['antwoordenToevoegen', this.pollID]);
  }

// Deze functie voegt de vrienden van de user toe aan de aangemaakte poll.
  vriendToevoegenAanPoll(vriend: Vriend){
    this.pollUser = new PollUser(0,this.pollID, vriend.vriendID);
    this.verwisselVriendVanZonderPollNaarPoll(vriend);
    this._pollUserService.addPollUser(this.pollUser).subscribe(result =>{
      this.pollUsers.push(result);
      console.log(result);
    });
  }

  // Deze functie verwijdert de vrienden die toegevoegd zijn aan de Poll.
  vriendVerwijderenVanPoll(vriend: Vriend){
    this.verwisselVriendVanPollNaarZonderPoll(vriend);
    console.log(vriend);
    this._pollUserService.verwijderUserVanPoll(vriend.vriendID, this.pollID).subscribe(result => {
      console.log(result);
    });
  }

// Deze functie haalt de Poll op met de ingegeven Id.
  vraagPollOp() {
    console.log('check:', this.pollID);
    this._pollService.getPoll(this.pollID).subscribe(p => {
      this.naamPoll = p.naam;
      console.log('in methode: ', this.naamPoll);
    });
  }

  // Deze functieverwisselt de vrienden van zonderPoll naar Poll.
  verwisselVriendVanZonderPollNaarPoll(vriend: Vriend){
    console.log(vriend);
    this.vriendenLijstMetPoll.push(vriend);
    this.vriendenLijstZonderPoll.splice(this.vriendenLijstZonderPoll.indexOf(vriend), 1);
  }
// Deze functieverwisselt de vrienden van Poll naar zonderPoll.
  verwisselVriendVanPollNaarZonderPoll(vriend: Vriend){
    this.vriendenLijstZonderPoll.push(vriend);
    this.vriendenLijstMetPoll.splice(this.vriendenLijstMetPoll.indexOf(vriend), 1);
  }

// Deze functie navigeert naar de home component. 
  naarHome(){
    this.router.navigate(['home']);
  }

// In de NgOnInit halen we de Id op van de Poll zodat we deze Id ook in deze component kunnen gebruiken.
// Vervolgens wordt de Poll met de ingegeven Id opgevraagd.
  ngOnInit() {
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      console.log('Id: ',this.pollID);
      this.vraagPollOp();
    });
  }

}
