import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


// material objects
import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {UserProfileComponent} from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassificaComponent } from './classifica/classifica.component';
import { LiveComponent } from './live/live.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DettaglioSquadraComponent } from './dettaglio-squadra/dettaglio-squadra.component';
import { SquadreComponent } from './squadre/squadre.component';
import { StatisticheComponent } from './statistiche/statistiche.component';
import { NotizieComponent } from './notizie/notizie.component';
import {AuthGuard} from './auth.guard';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'login', component: UserProfileComponent },
  { path: '', component: CalendarioComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'live', component: LiveComponent },
  { path: 'classifica', component: ClassificaComponent },
  { path: 'dettaglio-squadra', component: DettaglioSquadraComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'notizie', component: NotizieComponent },
  { path: 'statistiche', component: StatisticheComponent },
  { path: 'squadre', component: SquadreComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    DashboardComponent,
    ClassificaComponent,
    LiveComponent,
    CalendarioComponent,
    DettaglioSquadraComponent,
    SquadreComponent,
    StatisticheComponent,
    NotizieComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
