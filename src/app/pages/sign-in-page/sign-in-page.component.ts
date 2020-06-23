import { Component, OnInit } from '@angular/core';
import { Sign } from '../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordComponent } from '../../modals/forget-password/forget-password.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent implements OnInit {
  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  email: Sign = { content: '', error: null };
  password: Sign = { content: '', error: null };
  rememberMe: boolean = false;

  loading: boolean = false;
  sent: boolean = false;
  error: string = '';

  constructor(
    private auth: AuthService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onForgetPassword() {
    this.modalService.open(ForgetPasswordComponent, { centered: true });
  }

  onSubmit() {
    if(!this.emailReg.test(this.email.content)) {
      // if email address is incorrect
      this.email.error = 'Votre adresse email est invalide';
    } else {
      this.email.error = 'ok';
    }

    if(this.email.error = 'ok') {
      this.loading = true;
      this.auth.onSignIn(this.email.content, this.password.content)
        .subscribe(
          (res: User[]) => {
            this.loading = false;
            if(res.length === 0) {
              this.error = 'L\'email ou le mot de passe est incorrect, veuillez réessayer.';
            } else {
              localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
              localStorage.setItem('user', JSON.stringify(res[0]));
              this.error = '';
              this.sent = true;
              this.auth.user = res[0];
              this.router.navigate(['profil']);
            }
          },
          (err) => {
            console.log(err);
            this.loading = false;
          }
        )
    }

  }


}
