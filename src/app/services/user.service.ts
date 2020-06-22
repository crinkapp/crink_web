import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { NewUser } from '../models/user';

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = environment.API_URL;

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post(this.url + '/newsletters', {
      email_newsletters: email
    });
  }

  unsubscribe(email: string) {
    return this.http.put(this.url + '/newsletters', {
      email_newsletters: email
    });
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

  onForgotPassword(email: string) {
    return this.http.post(this.url + '/sendresetpwd', {
      email_user: email
    });
  }
}
