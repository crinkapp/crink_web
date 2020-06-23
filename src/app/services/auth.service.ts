import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewUser, User } from '../models/user';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User | null = null;
  url: string = environment.API_URL;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  onSignUp(newUser: NewUser, newsletters: boolean) {
    return this.http.post(this.url + '/user', {
      username_user: newUser.username_user,
      email_user: newUser.email_user,
      password_user: newUser.password_user,
      newsletter_user: newsletters // define if user wants to receive Crink's newsletters or not
    });
  }

  onSignIn(email: string, password: string) {
    return this.http.post(this.url + '/getuser', {
      email_user: email,
      password_user: password
    });
  }

  onSignOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.user = null;
    return this.router.navigate(['connexion']);
  }
}
