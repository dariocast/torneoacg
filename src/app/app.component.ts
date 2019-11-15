import { Component } from '@angular/core';

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
}
