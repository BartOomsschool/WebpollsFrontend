import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VriendService } from '../../../services/vriend/vriend.service';
import { VriendUserService } from '../../../services/vriendUser/vriend-user.service';
import { Vriend } from '../../../models/vriend.model';

@Component({
  selector: 'app-vrienden-lijst',
  templateUrl: './vrienden-lijst.component.html',
  styleUrls: ['./vrienden-lijst.component.scss']
})
export class VriendenLijstComponent implements OnInit {

  vrienden: Vriend[];
  nietVrienden: Vriend[];
  lengteNietvriendenLijst: number;
  lengtevriendenLijst: number;

  constructor(private router: Router, private _vriendenService: VriendService, private _vriendenUserService: VriendUserService) 
  {
    this.getVrienden();
    this.getNietVrienden();
  }

  getVrienden() {
    this._vriendenService.getVrienden().subscribe(v => {
      this.vrienden = v;
      this.lengtevriendenLijst = v.length;
    })
  }

  getNietVrienden() {
    this._vriendenService.getNietVrienden().subscribe(nv => {
      this.nietVrienden = nv;
      this.lengteNietvriendenLijst = nv.length;
    })
  }


  verwijderVriend(id: number) {
    console.log(id);
    this._vriendenService.deleteVriend(id).subscribe(result => {
      this.getVrienden();
      this.getNietVrienden();
    });
  }

  toevoegenVriend(id: number) {
    this._vriendenUserService.addVriendUser(id).subscribe(result => {
      this.getVrienden();
      this.getNietVrienden();
    });
  }

  naarHome(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
