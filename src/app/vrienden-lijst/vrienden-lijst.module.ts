import { NgModule } from '@angular/core';
import { VriendenLijstComponent } from './vrienden-lijst/vrienden-lijst.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VriendenLijstComponent],
  imports: [
    SharedModule
  ]
})
export class VriendenLijstModule { }
