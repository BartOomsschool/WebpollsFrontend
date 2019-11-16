import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollMakenComponent } from './poll-maken/poll-maken/poll-maken.component';
import { HomeComponent } from './home/home/home.component';
import { RegistratieComponent } from './registratie/registratie/registratie.component';
import { LoggerComponent } from './logger/logger/logger.component';
import { VriendenComponent } from './vrienden/vrienden/vrienden.component';
import { AntwoordenComponent } from './antwoorden/antwoorden/antwoorden.component';
import { AntwoordToevoegenComponent } from './antwoord-toevoegen/antwoord-toevoegen/antwoord-toevoegen.component';
import { VriendenLijstComponent } from './vrienden-lijst/vrienden-lijst/vrienden-lijst.component';
import { OverzichtStemmenComponent } from './overzicht-stemmen/overzicht-stemmen/overzicht-stemmen.component';



const appRoutes: Routes = [
  { path: 'logger', component: LoggerComponent },
  { path: 'registratie', component: RegistratieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pollMaken', component: PollMakenComponent },
  { path: 'vrienden/:id', component: VriendenComponent },
  { path: 'antwoorden/:id', component: AntwoordenComponent },
  { path: 'antwoordenToevoegen/:id', component: AntwoordToevoegenComponent },
  { path: 'vriendenLijst', component: VriendenLijstComponent },
  { path: 'overzichtStemmen/:id', component: OverzichtStemmenComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
