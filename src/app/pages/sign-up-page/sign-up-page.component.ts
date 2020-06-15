import { Component, OnInit } from '@angular/core';
import { NewUser } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

interface SignUp {
  content: string;
  error: string | null;
}

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  username: SignUp = { content: '', error: null };
  email: SignUp = { content: '', error: null };
  password: SignUp = { content: '', error: null };
  confirmPassword: string = '';

  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  loading: boolean = false;
  sent: boolean = false;
  errormsg: string | null = null;

  newsletter: boolean = false;
  next: NewUser | null = null;

  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.username.content.length < 4) {
      // if username is below 4 chars min
      this.username.error = 'Le nom d\'utilisateur doit comporter au moins 4 caractères';
    } else {
      this.username.error = 'ok';
    }
    if(!this.emailReg.test(this.email.content)) {
      // if email address is incorrect
      this.email.error = 'Votre adresse email est invalide';
    } else {
      this.email.error = 'ok';
    }
    if(this.password.content.length < 6) {
      // if passwords is below 6 chars min
      this.password.error = 'passwordlength'
    } else {
      if(this.password.content !== this.confirmPassword) {
        // if passwords are not the same
        this.password.error = 'Les mots de passe ne correspondent pas'
      } else {
        this.password.error = 'ok';
      }
    }

    if(
      this.username.error === 'ok' &&
      this.email.error === 'ok' &&
      this.password.error === 'ok') {
        this.loading = true;
        this.next = {
          username_user: this.username.content,
          email_user: this.email.content,
          password_user: this.password.content
        }
        this.user.onSignUp(this.next, this.newsletter)
          .subscribe(
            () =>  {
              this.sent = true;
              this.loading = false;
            },
            (err) => {
              console.log(err);
              this.loading = false;
            }
          )
      }

  }

}
