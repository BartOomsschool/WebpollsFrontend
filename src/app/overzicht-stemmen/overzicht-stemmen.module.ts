import { NgModule } from '@angular/core';
import { OverzichtStemmenComponent } from './overzicht-stemmen/overzicht-stemmen.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [OverzichtStemmenComponent],
  imports: [
    SharedModule
  ]
})
export class OverzichtStemmenModule { }
