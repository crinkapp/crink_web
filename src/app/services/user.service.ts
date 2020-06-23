import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

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

  onForgotPassword(email: string) {
    return this.http.post(this.url + '/sendresetpwd', {
      email_user: email
    });
  }
}
