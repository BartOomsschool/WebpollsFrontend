import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoggerComponent } from './logger/logger.component';



@NgModule({
  declarations: [LoggerComponent],
  imports: [
    SharedModule
  ]
})
export class LoggerModule { }
