import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  emailReg = RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');
  email: string = '';
  error: boolean = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  submit() {
    if(!this.emailReg.test(this.email)) {
      this.error = true;
      console.log('error');
    } else {
      console.log(this.email);
      this.activeModal.close();
    }
  }

}
