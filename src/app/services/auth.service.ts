import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NewUser } from '../models/user';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.API_URL;

  constructor(private http: HttpClient) { }

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
}
