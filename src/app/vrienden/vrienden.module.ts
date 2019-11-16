import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenComponent } from './vrienden/vrienden.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [VriendenComponent],
  imports: [
    SharedModule
  ]
})
export class VriendenModule { }
