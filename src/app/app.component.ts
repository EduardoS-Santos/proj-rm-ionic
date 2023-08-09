import { Component, inject } from '@angular/core';
import { Auth, authState, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  env = environment;
  private auth: Auth = inject(Auth);
  authState = authState(this.auth);
  authStateSubscription: Subscription;


  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Contatos', url: '/contacts', icon: 'mail' },
    { title: 'Sobre', url: '/sobre', icon: 'dice' },
    { title: 'Politicas de privacidade', url: '/private', icon: 'document-lock' },
 
  ];

  public appUser = {
    logged: false,
    title: 'Login / Entrar',
    url: '/login',
    icon: 'person',
    avatar: ''
  }

  constructor() {
    this.authStateSubscription = this.authState.subscribe((aUser: User | null) => {
      if (aUser !== null) {
        this.appUser = {
          logged: true,
          title: aUser.displayName + '',
          url: '/profile',
          icon: 'log-out',
          avatar: aUser.photoURL + ''
        }
      }
    })
  }
  logout() {
    this.auth.signOut();
    alert('Você saiu do aplicativo');
    location.href = '/home';
  }
}
