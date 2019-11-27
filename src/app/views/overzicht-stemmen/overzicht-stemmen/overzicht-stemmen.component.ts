import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antwoord } from 'src/app/models/antwoord.model';
import { AntwoordService } from 'src/app/services/antwoord/antwoord.service';
import { StemService } from 'src/app/services/stem/stem.service';
import { PollService } from 'src/app/services/poll/poll.service';

@Component({
  selector: 'app-overzicht-stemmen',
  templateUrl: './overzicht-stemmen.component.html',
  styleUrls: ['./overzicht-stemmen.component.scss']
})
export class OverzichtStemmenComponent implements OnInit {

  pollID: number;
  antwoorden: Antwoord[];
  aantalStemmen: number;
  pollNaam: string;

  constructor( private route: ActivatedRoute, private router : Router, private _antwoordService: AntwoordService, private _pollService: PollService)
  {

  }

// Deze functie vraagt alle antwoorden op met de ingegeven PollId.
  vraagAntwoordenOp(){
    console.log('Dit is de Id', this.pollID);
    this._antwoordService.getAntwoordenPoll(this.pollID).subscribe(a => {
      this.antwoorden = a;
      console.log('Dit zijn de antwoorden', this.antwoorden);
    });
  }

  // Deze functie haalt de naam van de poll op met de ingegeven Id.
  vraagPollOp(){
    this._pollService.getPoll(this.pollID).subscribe(result => {
        this.pollNaam = result.naam;
    });
  }

  // Deze functie navigeert naar de home component.
  naarHome() {
    this.router.navigate(['home']);
}

// In de NgOnInit halen we de Id op van de Poll zodat we deze Id ook in deze component kunnen gebruiken.
// Ook worden de antwoorden opgevraagd.
// Vervolgens wordt de Poll met de ingegeven Id opgevraagd.
  ngOnInit() {
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      this.vraagAntwoordenOp();
      this.vraagPollOp();
      console.log(Params.get('id'));
    })
  }

}
