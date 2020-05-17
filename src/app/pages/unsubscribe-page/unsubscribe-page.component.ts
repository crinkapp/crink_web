import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-unsubscribe-page',
  templateUrl: './unsubscribe-page.component.html',
  styleUrls: ['./unsubscribe-page.component.scss']
})
export class UnsubscribePageComponent implements OnInit {
  email: string = '';
  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  loading: boolean = false;
  error: boolean | null = null;
  sent: boolean = false;
  isAccepted: boolean = false;

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onAccept(ev: boolean) {
    this.isAccepted = ev;
  }

  onSubmit() {
    this.loading = true;
    if (this.emailReg.test(this.email)) {
      // if email address is valid
      this.user.unsubscribe(this.email)
        .subscribe(
          () => {
            // if sent successfully
            this.error = false;
            this.sent = true;
            this.loading = false;
          }
        ), (err) => {
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
