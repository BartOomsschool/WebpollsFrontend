import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registratie',
  templateUrl: './registratie.component.html',
  styleUrls: ['./registratie.component.scss'],
  providers: [UserService]
})
export class RegistratieComponent implements OnInit {

    constructor(private fb: FormBuilder, private _userService : UserService, private router : Router) { 

      
    } 

  registratieForm = this.fb.group({
    LastName: ['', Validators.required],
    FirstName: ['', Validators.required],
    UserName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.minLength(2)]],
    PasswordCheck: ['', [Validators.required, Validators.minLength(2)]],    
    Password: ['', [Validators.required, Validators.minLength(2)]]
    }); 

  submitted : boolean = false;
  onChangeUserName: boolean = false;
  onChangePassword: boolean = false;

  onSubmitRegistratie() {
    this.submitted = true;
    this.router.navigate(['']);
    this._userService.addUser(this.registratieForm.value).subscribe();
  }

  Annuleren(){
    this.router.navigate(['']);
  }


  ngOnInit() {

    this.registratieForm.valueChanges.subscribe(val => {
      console.log(val);
      }) 
      this.registratieForm.get('UserName').valueChanges.subscribe(val => {
        console.log(val);
        }) 
  }

  setForm()
  {
  this.registratieForm.setValue({
  gebruikersNaam: 'Ruddy',
  passwoord: 'Ruddies'
  });
  } 

  updateForm()
  {
  this.registratieForm.patchValue({
  gebruikersNaam: 'Leo'
  });
  } 

  onChangeUserNaam(){
    this._userService.validateUserNaam(this.registratieForm.value).subscribe(
      result => {
      this.onChangeUserName = true;
      console.warn("Username alrdy exists")
      },
      (error:any) => {
        this.onChangeUserName = false;
        console.error("Username alrdy exists")}
    );

  }

  passwordCheck(){
    if (this.registratieForm.value.Password  === this.registratieForm.value.PasswordCheck){
      console.warn("Passwoord goed");
      this.onChangePassword = true;
    }
    else {
      console.error("Passwoord is niet hetzelfde");
      this.onChangePassword = false;
    }
      
  }


}
