import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  token: string;

  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
   }

  Uitloggen(){
    this.router.navigate(['']);
    localStorage.clear();
    this.token = null;
  }

  ngOnInit() {
    this.token = localStorage.getItem('token');
  }

}
