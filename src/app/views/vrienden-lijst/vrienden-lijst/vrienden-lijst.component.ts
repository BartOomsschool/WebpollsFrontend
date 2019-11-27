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

  // Deze functie haalt de vrienden op van de ingelogde user. 
  getVrienden() {
    this._vriendenService.getVrienden().subscribe(v => {
      this.vrienden = v;
      this.lengtevriendenLijst = v.length;
    });
  }

  // Deze functie haalt de alle users op die geen vrienden zijn van de ingelogde user.
  getNietVrienden() {
    this._vriendenService.getNietVrienden().subscribe(nv => {
      this.nietVrienden = nv;
      this.lengteNietvriendenLijst = nv.length;
    })
  }

// Deze functie verwijdert een vriend van de ingelogde user.
  verwijderVriend(id: number) {
    console.log(id);
    this._vriendenService.deleteVriend(id).subscribe(result => {
      this.getVrienden();
      this.getNietVrienden();
    });
  }
// Deze functie voegt een vriendverzoek toe met de ingegeven id.
  toevoegenVriend(id: number) {
    this._vriendenUserService.addVriendUser(id).subscribe(result => {
      this.getVrienden();
      this.getNietVrienden();
    });
  }
// Deze functie navigeert naar de home component.
  naarHome(){
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
