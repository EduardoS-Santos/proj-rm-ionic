import { Component, inject, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, User } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public env = environment;

  constructor(private auth: Auth = inject(Auth)) { }

  ngOnInit() {
  }



  logint() {
    if (this.env.signInMethod == 'redirect')
      signInWithRedirect(this.auth, new GoogleAuthProvider());
    else
      signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
