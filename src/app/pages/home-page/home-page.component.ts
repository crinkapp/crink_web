import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  loading: boolean = false;
  error: boolean | null = null;
  sent: boolean = false;
  isAccepted: boolean = false;

  constructor(private service: UserService) { }

  ngOnInit() {
  }

  onAccept(ev: boolean) {
    this.isAccepted = ev;
  }

  onSubmit(email: string) {
    this.loading = true;
    if (this.emailReg.test(email)) {
      // if email address is valid
      this.service.sendEmail(email)
        .subscribe(
          () => {
            // if sent successfully
            this.error = false;
            this.sent = true;
            this.loading = false;
          },
          ), (err: any) => {
            // if error in sending email
            console.log(err);
            this.error = true;
            this.loading = false;
        }
    } else {
      // if email address isn't valid
      this.error = true;
      this.loading = false;
    }
  }
}
