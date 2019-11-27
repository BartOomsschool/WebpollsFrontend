import { NgModule } from '@angular/core';
import { AntwoordenPollComponent } from './antwoorden-poll/antwoorden-poll.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [AntwoordenPollComponent],
  imports: [
    SharedModule
  ]
})
export class AntwoordenModule { }
