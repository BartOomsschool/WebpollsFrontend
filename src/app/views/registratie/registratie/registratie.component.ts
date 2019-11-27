import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'; 
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registratie',
  templateUrl: './registratie.component.html',
  styleUrls: ['./registratie.component.scss'],
  providers: [UserService]
})
export class RegistratieComponent implements OnInit {

    constructor(private fb: FormBuilder, private _userService: UserService, private router: Router) {
    }

  registratieForm = this.fb.group({
    LastName: ['', Validators.required],
    FirstName: ['', Validators.required],
    UserName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.minLength(1), Validators.email]],
    PasswordCheck: ['', [Validators.required, Validators.minLength(5)]],
    Password: ['', [Validators.required, Validators.minLength(5)]]
    });

  submitted: boolean = false;
  onChangeUserName: boolean = false;
  onChangePassword: boolean = false;

// Deze functie stuurt een user door en navigeert vervolgens naar de logger component.
  onSubmitRegistratie() {
    this.submitted = true;
    this._userService.addUser(this.registratieForm.value).subscribe();
    this.router.navigate(['']);
  }

  // deze functie navigeert naar de logger component.
  Annuleren(){
    this.router.navigate(['']);
  }

  // Deze functie kijkt of de UserNaam al bestaat in de database.
  onChangeUserNaam(){
    this._userService.validateUserNaam(this.registratieForm.value.UserName).subscribe(
      result => {
      this.onChangeUserName = true;
      console.log(result);
      console.warn("GoodUsername")
      },
      (error:any) => {
        this.onChangeUserName = false;
        console.log(error);
        console.error("Username alrdy exists")}
    );

  }

  // Deze functie kijkt of de paswoorden overeenkomen of niet.
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

  
  ngOnInit() {
    //   this.registratieForm.valueChanges.subscribe(val => {
    //     console.log(val);
    //     }); 
    //     this.registratieForm.get('UserName').valueChanges.subscribe(val => {
    //       console.log(val);
    //       }); 
     }


}
