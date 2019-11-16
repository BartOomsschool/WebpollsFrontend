import { NgModule } from '@angular/core';
import { AntwoordenComponent } from './antwoorden/antwoorden.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AntwoordenComponent],
  imports: [
    SharedModule
  ]
})
export class AntwoordenModule { }
