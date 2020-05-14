import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  sendEmail(email: string) {
    return this.http.post(this.url + '/addnewsletter', {
      email_newsletter: email
    });
  }
}
