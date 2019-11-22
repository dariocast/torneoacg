import { Component } from '@angular/core';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Torneo ACG';
  navLinks = [
    { label: 'Partite', path: '/calendario' },
    { label: 'Notizie', path: '/notizie' },
    { label: 'Classifica', path: '/classifica' },
    { label: 'Statistiche', path: '/statistiche' },
    { label: 'Squadre', path: '/squadre' }
  ];

  constructor(public auth: AuthService) {

  }
}
