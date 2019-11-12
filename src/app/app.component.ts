import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Torneo ACG';
  navLinks = [
    { label: 'Calendario', path: '/calendario' },
    { label: 'Classifica', path: '/classifica' },
    { label: 'Squadre', path: '/squadre' }
  ];
}
