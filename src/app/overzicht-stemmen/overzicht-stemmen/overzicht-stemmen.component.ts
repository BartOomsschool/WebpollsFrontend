import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antwoord } from 'src/app/models/antwoord.model';
import { AntwoordService } from 'src/app/services/antwoord/antwoord.service';
import { StemService } from 'src/app/services/stem/stem.service';

@Component({
  selector: 'app-overzicht-stemmen',
  templateUrl: './overzicht-stemmen.component.html',
  styleUrls: ['./overzicht-stemmen.component.scss']
})
export class OverzichtStemmenComponent implements OnInit {

  pollID: number;
  antwoorden: Antwoord[];
  aantalStemmen: number;

  constructor( private route: ActivatedRoute, private router : Router, private _antwoordService: AntwoordService, private _stemmenService: StemService) 
  { 
    
  }


  vraagAntwoordenOp(){
    console.log('Dit is de Id',this.pollID);
    this._antwoordService.getAntwoordenPoll(this.pollID).subscribe(a => {
      this.antwoorden = a;
      console.log('Dit zijn de antwoorden', this.antwoorden);
    })    
  }

  naarHome() {
    this.router.navigate(['home']);
}


  ngOnInit() {
    this.route.paramMap.subscribe(Params => {
      this.pollID = parseInt(Params.get('id'));
      this.vraagAntwoordenOp();
      console.log(Params.get('id'));
    })
  }

}
