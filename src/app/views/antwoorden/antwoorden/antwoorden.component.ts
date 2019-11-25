import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AntwoordService } from '../../../services/antwoord/antwoord.service';
import { Antwoord } from '../../../models/antwoord.model';
import { ActivatedRoute, Router} from '@angular/router';
import { PollService } from 'src/app/services/poll/poll.service';
import { Poll } from 'src/app/models/poll.model';
import { StemService } from 'src/app/services/stem/stem.service';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-antwoorden',
  templateUrl: './antwoorden.component.html',
  styleUrls: ['./antwoorden.component.scss']
})
export class AntwoordenComponent implements OnInit {

  pollID: number;
  poll: Poll;
  pollNaam: string;
  antwoorden: Antwoord[];



  antwoordForm = this.fb.group({
    AntwoordText: ['', Validators.required]
  });
  

  constructor(private fb: FormBuilder, private router : Router, private _antwoordService: AntwoordService, private route: ActivatedRoute, private _pollService: PollService, private _stemService: StemService) 
  {     
    
  }

  stemToevoegen(antwoord : Antwoord){
    this._pollService.updatePoll(this.pollID, this.poll).subscribe(result => {
        console.log('updated poll: ', result);
    });
    this._stemService.addStem(antwoord.antwoordID).subscribe(result => {
      this.router.navigate(['overzichtStemmen' , this.pollID]);
      console.log('stem toegevoegd voor antwoord: ', result);
    });
 
  }


  vraagPollOp(){
    console.log(this.pollNaam);
    this._pollService.getPoll(this.pollID).subscribe(p => {
      this.poll = p;
      this.pollNaam = p.naam;
      
    });
    console.log(this.pollNaam);  
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
        console.log(Params.get('id'));
        this.vraagPollOp();
        this.vraagAntwoordenOp();
      })
      console.log(this.pollID);

      this.antwoordForm.valueChanges.subscribe(val => {
        console.log(val);
      })
      this.antwoordForm.get('AntwoordText').valueChanges.subscribe(val => {
        console.log(val);
      })
  }

}
