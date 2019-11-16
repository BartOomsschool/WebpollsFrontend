import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoggerComponent } from './logger/logger/logger.component';
import { RegistratieComponent } from './registratie/registratie/registratie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PollMakenComponent } from './poll-maken/poll-maken/poll-maken.component'; 
import { SecurityInterceptor } from './security/security.interceptor';
import { VriendenComponent } from './vrienden/vrienden/vrienden.component';
import { AntwoordenComponent } from './antwoorden/antwoorden/antwoorden.component';
import { AntwoordToevoegenComponent } from './antwoord-toevoegen/antwoord-toevoegen/antwoord-toevoegen.component';
import { VriendenLijstComponent } from './vrienden-lijst/vrienden-lijst/vrienden-lijst.component';
import { OverzichtStemmenComponent } from './overzicht-stemmen/overzicht-stemmen/overzicht-stemmen.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoggerComponent,
    RegistratieComponent,
    HomeComponent,
    PollMakenComponent,
    VriendenComponent,
    AntwoordenComponent,
    AntwoordToevoegenComponent,
    VriendenLijstComponent,
    OverzichtStemmenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [
    {
   provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
