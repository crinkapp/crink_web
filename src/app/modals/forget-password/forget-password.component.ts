import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  email: string = '';
  error: { err: boolean, content: string } = { err: false, content: '' };
  loading: boolean = false;
  sent: boolean = false;

  constructor(private user: UserService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.emailReg.test(this.email)) {
      this.error.err = true;
      this.error.content = "L'adresse email est invalide.";
    } else {
      this.loading = true
      this.user.onForgotPassword(this.email)
        .subscribe((res) => {
          if(res === 'Email not found in database, try again.') {
            this.loading = false;
            this.error.err = true;
            this.error.content = "Cet email n'appartient à aucun utilisateur, veuillez réessayer.";
          } else {
            this.loading = false;
            this.error.err = false;
            this.sent = true;
            console.log(res);
          }
        }, (err) => {
          console.log(err);
          this.loading = false;
        })
      // this.activeModal.close();
    }
  }

}
