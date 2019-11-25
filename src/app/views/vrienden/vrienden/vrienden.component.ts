import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PollUserService } from 'src/app/services/pollUser/poll-user.service';
import { VriendService } from 'src/app/services/vriend/vriend.service';
import { Vriend } from 'src/app/models/vriend.model';
import { PollService } from 'src/app/services/poll/poll.service';
import { PollUser } from 'src/app/models/poll-User.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-vrienden',
  templateUrl: './vrienden.component.html',
  styleUrls: ['./vrienden.component.scss']
})
export class VriendenComponent implements OnInit {

  

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

  getVriendenZonderPoll() {
    this._vriendenService.getVrienden().subscribe(v => {
      this.vriendenLijstZonderPoll = v;
    })
  }

  naarVorige(){
    this.router.navigate(['antwoordenToevoegen', this.pollID]);
  }

  vriendToevoegenAanPoll(vriend: Vriend){
    this.pollUser = new PollUser(0,this.pollID, vriend.vriendID);
    this.verwisselVriendVanZonderPollNaarPoll(vriend);
    this._pollUserService.addPollUser(this.pollUser).subscribe(result =>{
      this.pollUsers.push(result);
      console.log(result);      
    });
  }

  vriendVerwijderenVanPoll(vriend: Vriend){
    this.verwisselVriendVanPollNaarZonderPoll(vriend);
    console.log(vriend);
    this._pollUserService.verwijderUserVanPoll(vriend.vriendID, this.pollID).subscribe(result => {
      console.log(result);
    })
  }

  vraagPollOp() {
    console.log('check:', this.pollID);
    this._pollService.getPoll(this.pollID).subscribe(p => {
      this.naamPoll = p.naam;
      console.log('in methode: ', this.naamPoll);
    });
  }

  verwisselVriendVanZonderPollNaarPoll(vriend: Vriend){
    console.log(vriend);
    this.vriendenLijstMetPoll.push(vriend);
    this.vriendenLijstZonderPoll.splice(this.vriendenLijstZonderPoll.indexOf(vriend), 1);
  }

  verwisselVriendVanPollNaarZonderPoll(vriend: Vriend){
    this.vriendenLijstZonderPoll.push(vriend);
    this.vriendenLijstMetPoll.splice(this.vriendenLijstMetPoll.indexOf(vriend), 1);
    
  }

  naarHome(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      console.log('Id: ',this.pollID);
      this.vraagPollOp();
    })
  }

}
