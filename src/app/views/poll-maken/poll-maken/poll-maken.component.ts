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
    Naam: ['', [Validators.required, Validators.minLength(2)]]
    });

    constructor(private fb: FormBuilder, private _pollService: PollService, private router: Router) { }


  submitted: boolean = false;

// Deze functie stuurt een Poll door en navigeert vervolgens naar de antwoordenToevoegen component.
  onSubmitPoll() {
    this.submitted = true;
    this._pollService.addPoll(this.pollMakenForm.value).subscribe(result => {
      this.router.navigate(['antwoordenToevoegen', result.pollID]);
      console.log(result);
  });
  }

// Deze functie navigeert naar de home component.
  naarHome(){
    this.router.navigate(['home']);
  }


  ngOnInit() {
//    this.pollMakenForm.valueChanges.subscribe(val => {
//     console.log(val);
//      }) 
//      this.pollMakenForm.get('Naam').valueChanges.subscribe(val => {
//        console.log(val);
//        }) 
  }
}
