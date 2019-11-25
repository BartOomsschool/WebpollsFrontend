import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { PollMakenComponent } from './poll-maken/poll-maken.component';



@NgModule({
  declarations: [PollMakenComponent],
  imports: [
    SharedModule
  ]
})
export class PollMakenModule { }
