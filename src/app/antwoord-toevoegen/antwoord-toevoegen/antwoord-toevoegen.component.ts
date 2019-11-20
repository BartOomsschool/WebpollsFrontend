import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AntwoordService } from 'src/app/services/antwoord/antwoord.service';
import { PollService } from 'src/app/services/poll/poll.service';
import { Poll } from 'src/app/models/poll.model';
import { Antwoord } from 'src/app/models/antwoord.model';

@Component({
  selector: 'app-antwoord-toevoegen',
  templateUrl: './antwoord-toevoegen.component.html',
  styleUrls: ['./antwoord-toevoegen.component.scss'],
  providers: [PollService, AntwoordService]
})
export class AntwoordToevoegenComponent implements OnInit {

  pollID: number;
  naamPoll: string;
  onsubmit: boolean = false;
  antwoordenPoll: Antwoord[];

  antwoordenForm = this.fb.group({
    AntwoordText: ['', [Validators.required, Validators.minLength(2)]],

  });


  constructor(private fb: FormBuilder, private router: Router, private _antwoordService: AntwoordService, private route: ActivatedRoute, private _pollService: PollService, ) {


    console.log('Id: ', this.pollID);


  }

  onSubmitAntwoord() {

    if (!this.onsubmit) {
      this.antwoordenForm.addControl('pollID', new FormControl(this.pollID));
      this.onsubmit = true
    } else {
      this.antwoordenForm.get('pollID').setValue(this.pollID);
    }
    console.log(this.antwoordenForm.value);
    this._antwoordService.addAntwoord(this.antwoordenForm.value).subscribe(result => {
      this.antwoordenForm.reset(); 
      console.log(result);
      this.vraagAntwoordenOp();
    });
  }

  vraagPollOp() {
    console.log('check:', this.pollID);
    this._pollService.getPoll(this.pollID).subscribe(p => {
      this.naamPoll = p.naam;
      console.log('in methode: ', this.naamPoll);

    });
    console.log(this.naamPoll);
  }

  vriendenToevoegen() {
    this.router.navigate(['vrienden', this.pollID]);
  }

  naarPollMaken() {

    this._pollService.deletePoll(this.pollID).subscribe(result => {
      this.router.navigate(['pollMaken']);
      console.log(result);
    });

  }

  vraagAntwoordenOp(){
    console.log('Dit is de Id',this.pollID);
    this._antwoordService.getAntwoordenPoll(this.pollID).subscribe(a => {
      this.antwoordenPoll = a;
      console.log('Dit zijn de antwoorden', this.antwoordenPoll);
    })    
  }

  verwijderAntwoord(id: number){
    this._antwoordService.deleteAntwoord(id).subscribe(result => {
      this.vraagAntwoordenOp();
    });
  }


  ngOnInit() {
    console.log('in constructor: ', this.naamPoll)
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      this.vraagPollOp();
      console.log('Id: ',this.pollID);
    })
  }

}