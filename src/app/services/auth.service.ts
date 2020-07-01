import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewUser } from '../models/user';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.API_URL;

  constructor(
    private http: HttpClient,
    private router: Router,
    private user: UserService
  ) { }

  public isAuthenticated(): boolean {
    if (this.user.currentUser) {
      return true;
    } else {
      return false;
    }
  }

  onSignUp(newUser: NewUser, newsletters: boolean) {
    return this.http.post(this.url + '/register', {
      username_user: newUser.username_user,
      gender_user: newUser.gender_user,
      email_user: newUser.email_user,
      password_user: newUser.password_user,
      newsletter_user: newsletters // define if user wants to receive Crink's newsletters or not
    });
  }

  onSignIn(email: string, password: string) {
    return this.http.post(this.url + '/login', {
      email_user: email,
      password_user: password
    });
  }

  onSignOut() {
    this.http.get(this.url + '/logout').subscribe(
      () => {
        this.user.currentUser = null;
        return this.router.navigate(['connexion']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
