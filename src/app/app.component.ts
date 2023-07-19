import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Contatos', url: '/contacts', icon: 'mail' },
    { title: 'Sobre', url: '/sobre', icon: 'dice' },
    { title: 'Politicas de privacidade', url: '/private', icon: 'document-lock' },
  ];
  constructor() {}
}
