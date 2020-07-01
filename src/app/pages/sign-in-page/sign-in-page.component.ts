import { Component, OnInit } from '@angular/core';
import { Sign, User } from '../../models/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordComponent } from '../../modals/forget-password/forget-password.component';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    private router: Router,
    private user: UserService
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
          () => {
            this.user.getUser()
            .subscribe(
              (user: User) => {
                this.user.currentUser = user;
                this.router.navigate(['/profil']);
              },
              () => this.user.currentUser = null
            )
          }, (err) => {
            console.log(err);
          }
        )
      }

  }

}
