import { NgModule } from '@angular/core';
import { RegistratieComponent } from './registratie/registratie.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [RegistratieComponent],
  imports: [
    SharedModule
  ]
})
export class RegistratieModule { }
