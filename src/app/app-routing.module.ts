import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ChambresComponent} from './chambres/chambres.component';
import {GiteComponent} from './gite/gite.component';
import {ReserverComponent} from './reserver/reserver.component';
import {ActivitesComponent} from './activites/activites.component';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index',       component: IndexComponent },
  { path: 'activités',   component: ActivitesComponent },
  { path: 'chambres',    component: ChambresComponent },
  { path: 'gite',        component: GiteComponent },
  { path: 'réservation', component: ReserverComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
