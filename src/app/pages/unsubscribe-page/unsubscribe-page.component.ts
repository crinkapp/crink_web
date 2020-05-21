import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';

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
  userEmail: string;
  incorrectEmail: boolean = false;

  constructor(private user: UserService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userEmail = params['email'];
  });
  }

  ngOnInit() {
  }

  onAccept(ev: boolean) {
    this.isAccepted = ev;
  }

  onSubmit() {
    this.loading = true;
    if (!this.emailReg.test(this.email)) {
      // if email address isn't valid
      this.error = true;
      this.loading = false;
      this.incorrectEmail = false;
      return;
    }
    // if email address is valid
    if (this.email === this.userEmail) {
      // if email address is equal to email of user
      return this.onUnsubscribe();
    }
    this.error = true;
    this.incorrectEmail = true;
    this.loading = false;
  }


  onUnsubscribe() {
    this.user.unsubscribe(this.email).subscribe(() => {
      // if sent successfully
      this.error = false;
      this.sent = true;
      this.loading = false;
      this.incorrectEmail = false;
    }), (err) => {
      // if error in sending email
      console.log(err);
      this.error = true;
      this.loading = false;
      this.incorrectEmail = false;
    }
  }

}
