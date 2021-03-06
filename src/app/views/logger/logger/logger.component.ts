import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticateService} from '../../../services/authenticatie/authenticate.service';


@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss'],
  providers: []
})
export class LoggerComponent implements OnInit {

  loggerForm = this.fb.group({
    UserName: ['', Validators.required],
    Password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private _authenticateService: AuthenticateService) { }

  submitted: boolean = false;

  // Deze functie kijkt of de ingegeven user al bestaat.
  // Vervolgens navigeert deze functie naar de home component.
  onSubmitLogger() {
    this.submitted = true;
    this._authenticateService.authenticate(this.loggerForm.value).subscribe(result => {
      localStorage.setItem('token', result.token);
      localStorage.setItem('userID', result.UserID + '');
      this._authenticateService.isLoggedin.next(result.token ? true : false);
      this.router.navigate(['/home']);
    });
  }


  ngOnInit() {
//    this.loggerForm.valueChanges.subscribe(val => {
//      console.log(val);
//    });
//    this.loggerForm.get('UserName').valueChanges.subscribe(val => {
//      console.log(val);
//  });
  }



}
