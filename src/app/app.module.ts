import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './index/index.component';
import { ChambresComponent } from './chambres/chambres.component';
import { GiteComponent } from './gite/gite.component';
import { ReserverComponent } from './reserver/reserver.component';
import { ActivitesComponent } from './activites/activites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    ChambresComponent,
    GiteComponent,
    ReserverComponent,
    ActivitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
