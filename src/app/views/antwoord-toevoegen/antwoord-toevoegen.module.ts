import { NgModule } from '@angular/core';
import { AntwoordToevoegenComponent } from './antwoord-toevoegen/antwoord-toevoegen.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [AntwoordToevoegenComponent],
  imports: [
    SharedModule,
  ]
})
export class AntwoordToevoegenModule { }
