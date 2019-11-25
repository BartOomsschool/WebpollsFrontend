import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoggerComponent } from './views/logger/logger/logger.component';
import { RegistratieComponent } from './views/registratie/registratie/registratie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './views/home/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PollMakenComponent } from './views/poll-maken/poll-maken/poll-maken.component'; 
import { SecurityInterceptor } from './security/security.interceptor';
import { VriendenComponent } from './views/vrienden/vrienden/vrienden.component';
import { AntwoordenComponent } from './views/antwoorden/antwoorden/antwoorden.component';
import { AntwoordToevoegenComponent } from './views/antwoord-toevoegen/antwoord-toevoegen/antwoord-toevoegen.component';
import { VriendenLijstComponent } from './views/vrienden-lijst/vrienden-lijst/vrienden-lijst.component';
import { OverzichtStemmenComponent } from './views/overzicht-stemmen/overzicht-stemmen/overzicht-stemmen.component';




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
