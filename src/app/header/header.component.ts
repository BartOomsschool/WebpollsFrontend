import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../services/authenticatie/authenticate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  token: string;

  constructor(private router: Router, private _authenticateService : AuthenticateService) {

   }



  Uitloggen(){
    this.router.navigate(['']);
    localStorage.clear();
    this.token = null;
  }
  ngOnInit() {
    this._authenticateService.isLoggedin.subscribe(e => {
      this.token = localStorage.getItem('token');
     });
  }

}
