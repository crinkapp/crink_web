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
    return this.http.post(this.url + '/sendemail', {
      email_newsletters: email
    });
  }
}
