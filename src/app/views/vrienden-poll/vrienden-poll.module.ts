import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VriendenPollComponent } from './vrienden-poll/vrienden-poll.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [VriendenPollComponent],
  imports: [
    SharedModule
  ]
})
export class VriendenPollModule { }
