import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
import { DettaglioSqaudraComponent } from './dettaglio-sqaudra/dettaglio-sqaudra.component';
import { SquadreComponent } from './squadre/squadre.component';

const appRoutes: Routes = [
  { path: 'login', component: UserProfileComponent },
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'live', component: LiveComponent },
  { path: 'classifica', component: ClassificaComponent },
  { path: 'dettaglio-squadra', component: DettaglioSqaudraComponent },
  { path: 'calendario', component: CalendarioComponent },
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
    DettaglioSqaudraComponent,
    SquadreComponent
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
