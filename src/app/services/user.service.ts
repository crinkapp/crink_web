import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Diagnostic } from '../models/diagnostic';

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = environment.API_URL;
  currentUser: User | null = null;

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post(this.url + '/newsletters', {
      email_newsletters: email
    });
  }

  unsubscribe(email: string) {
    return this.http.put(`${this.url}/newsletters`, {
      email_newsletters: email
    });
  }

  onForgotPassword(email: string) {
    return this.http.post(`${this.url}/sendresetpwd`, {
      email_user: email
    });
  }

  getUser() {
    return this.http.get(`${this.url}/user`);
  }

  addDiagnostic(diagnostic: Diagnostic) {
    return this.http.post(`${this.url}/diagnostic`, diagnostic);
  }
}
