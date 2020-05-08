import { Component, OnInit } from '@angular/core';
import { SignUp } from '../../models/sign-up';

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

  constructor() { }

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
    if(this.password.content !== this.confirmPassword) {
      // if passwords are not the same
      this.password.error = 'Les mots de passe ne correspondent pas'
    } else {
      this.password.error = 'ok';
    }

  }

}
