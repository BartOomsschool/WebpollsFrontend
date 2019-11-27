import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AntwoordService } from 'src/app/services/antwoord/antwoord.service';
import { PollService } from 'src/app/services/poll/poll.service';
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
  lengteAntwoordenPoll: number = 0;

  antwoordenForm = this.fb.group({
    AntwoordText: ['', [Validators.required, Validators.minLength(2)]],

  });


  constructor(private fb: FormBuilder, private router: Router, private _antwoordService: AntwoordService, private route: ActivatedRoute, private _pollService: PollService, ) {


    console.log('Id: ', this.pollID);


  }
// Deze functie stuurt een antwoord door aan dit antwoord word ook een PollId gekoppeld.
  onSubmitAntwoord() {

    if (!this.onsubmit) {
      this.antwoordenForm.addControl('pollID', new FormControl(this.pollID));
      this.onsubmit = true;
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
// Deze funtcie vraagt de aangemaakte Poll op.
  vraagPollOp() {
    console.log('check:', this.pollID);
    this._pollService.getPoll(this.pollID).subscribe(p => {
      this.naamPoll = p.naam;
      console.log('in methode: ', this.naamPoll);

    });
    console.log(this.naamPoll);
  }
// Deze functie navigeert naar de componenten vriendenPoll.
  vriendenToevoegen() {
    this.router.navigate(['vriendenPoll', this.pollID]);
  }
// Deze functie nevigeert naar de component pollMaken
  naarPollMaken() {

    this._pollService.deletePoll(this.pollID).subscribe(result => {
      this.router.navigate(['pollMaken']);
      console.log(result);
    });

  }
// Deze functie haalt de aangemaakte antwoorden op.
  vraagAntwoordenOp(){
    console.log('Dit is de Id',this.pollID);
    this._antwoordService.getAntwoordenPoll(this.pollID).subscribe(a => {
      this.antwoordenPoll = a;
      this.lengteAntwoordenPoll = a.length;
      console.log('Dit zijn de antwoorden', this.antwoordenPoll);
    });
  }
// Deze functie verwijdert de aangemaakte functie met de ingegeven Id.
  verwijderAntwoord(id: number){
    this._antwoordService.deleteAntwoord(id).subscribe(result => {
      this.vraagAntwoordenOp();
    });
  }

// In de NgOnInit halen we de Id op van de Poll zodat we deze Id ook in deze component kunnen gebruiken.
// Vervolgens wordt de Poll met de ingegeven Id opgevraagd.
  ngOnInit() {
    console.log('in constructor: ', this.naamPoll);
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      this.vraagPollOp();
      console.log('Id: ',this.pollID);
    });
  }

}
