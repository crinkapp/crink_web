import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private user: UserService) { }

  canActivate(): boolean {
    if (this.user.currentUser === null) {
      this.router.navigate(['connexion']);
      return false;
    }
    return true;
  }
}
