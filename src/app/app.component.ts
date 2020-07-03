import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, private user: UserService) { }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.user.getUser()
    .subscribe(
      (user: User) => this.user.currentUser = user,
      () => this.user.currentUser = null
    )
  }
}
