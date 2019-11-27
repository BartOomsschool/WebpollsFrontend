import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollMakenComponent } from './views/poll-maken/poll-maken/poll-maken.component';
import { HomeComponent } from './views/home/home/home.component';
import { RegistratieComponent } from './views/registratie/registratie/registratie.component';
import { LoggerComponent } from './views/logger/logger/logger.component';
import { VriendenPollComponent } from './views/vrienden-poll/vrienden-poll/vrienden-poll.component';
import { AntwoordenPollComponent } from './views/antwoorden-poll/antwoorden-poll/antwoorden-poll.component';
import { AntwoordToevoegenComponent } from './views/antwoord-toevoegen/antwoord-toevoegen/antwoord-toevoegen.component';
import { VriendenLijstComponent } from './views/vrienden-lijst/vrienden-lijst/vrienden-lijst.component';
import { OverzichtStemmenComponent } from './views/overzicht-stemmen/overzicht-stemmen/overzicht-stemmen.component';



const appRoutes: Routes = [
  { path: '', component: LoggerComponent },
  { path: 'registratie', component: RegistratieComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pollMaken', component: PollMakenComponent },
  { path: 'vriendenPoll/:id', component: VriendenPollComponent },
  { path: 'antwoordenPoll/:id', component: AntwoordenPollComponent },
  { path: 'antwoordenToevoegen/:id', component: AntwoordToevoegenComponent },
  { path: 'vriendenLijst', component: VriendenLijstComponent },
  { path: 'overzichtStemmen/:id', component: OverzichtStemmenComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
