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

  onSignUp(newUser: NewUser) {
    return this.http.post(this.url + '/user', {
      username_user: newUser.username,
      email_user: newUser.email,
      password_user: newUser.password
    })
  }
}
