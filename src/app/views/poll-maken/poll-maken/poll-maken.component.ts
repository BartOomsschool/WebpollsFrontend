import { Component, OnInit } from '@angular/core';
import { PollService } from '../../../services/poll/poll.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-maken',
  templateUrl: './poll-maken.component.html',
  styleUrls: ['./poll-maken.component.scss'],
  providers: [PollService, UserService]
})
export class PollMakenComponent implements OnInit {

  pollMakenForm = this.fb.group({
    Naam: ['', Validators.required]
    }); 

    constructor(private fb: FormBuilder, private _pollService : PollService, private router : Router
      // private _authenticateService : AuthenticateService
      ) { } 


  submitted : boolean = false;

  onSubmitPoll() {
    this.submitted = true;
    this._pollService.addPoll(this.pollMakenForm.value).subscribe(result => {this.router.navigate(['antwoordenToevoegen', result.pollID]);console.log(result) ;})   
    
    
  }

  
  naarHome(){
    this.router.navigate(['home']);
  }

 

  ngOnInit() {
    this.pollMakenForm.valueChanges.subscribe(val => {
      console.log(val);
      }) 
      this.pollMakenForm.get('Naam').valueChanges.subscribe(val => {
        console.log(val);
        }) 
  }
}
