import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PollMakenComponent } from './views/poll-maken/poll-maken/poll-maken.component';
import { HomeComponent } from './views/home/home/home.component';
import { RegistratieComponent } from './views/registratie/registratie/registratie.component';
import { LoggerComponent } from './views/logger/logger/logger.component';
import { VriendenComponent } from './views/vrienden/vrienden/vrienden.component';
import { AntwoordenComponent } from './views/antwoorden/antwoorden/antwoorden.component';
import { AntwoordToevoegenComponent } from './views/antwoord-toevoegen/antwoord-toevoegen/antwoord-toevoegen.component';
import { VriendenLijstComponent } from './views/vrienden-lijst/vrienden-lijst/vrienden-lijst.component';
import { OverzichtStemmenComponent } from './views/overzicht-stemmen/overzicht-stemmen/overzicht-stemmen.component';



const appRoutes: Routes = [
  { path: '', component: LoggerComponent },
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
