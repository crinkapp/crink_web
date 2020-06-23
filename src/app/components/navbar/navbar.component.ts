import { Component, HostListener, NgZone } from "@angular/core";
import { Router } from '@angular/router';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translate3d(0, 0, 0)',
      })),
      state('close', style({
        transform: 'translate3d(100%, 0, 0)',
      })),
      transition('open => close', animate('200ms 0.2ms ease-in-out')),
      transition('close => open', animate('350ms 0.2ms ease-in-out')),
    ])
  ]
})
export class NavbarComponent {
  scrolled: boolean = false;
  toggleMenu: string = 'close';

  constructor(
    public router: Router,
    public auth: AuthService,
    private ngZone: NgZone) {
      if(this.auth.isAuthenticated()) {
        const loggedUser = localStorage.getItem('user');
        this.auth.user = JSON.parse(loggedUser);
      }
      window.onresize = () => {
          this.ngZone.run(() => {
            if(window.innerWidth > 991) {
              this.toggleMenu = 'close';
            }
          });
      };
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {
    let scroll = e.target['scrollingElement'].scrollTop;
    scroll > 140 ? this.scrolled = true : this.scrolled = false;
  }

  toggle(route?: string) {
    if(this.router.url === route) {
      this.smoothScroll();
    }
    this.toggleMenu = this.toggleMenu === 'close' ? 'open' : 'close';
  }

  backHome() {
    if(this.router.url === '/') {
      this.smoothScroll();
    }
    this.toggleMenu = 'close';
    this.router.navigate(['/']);
  }

  smoothScroll() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSignOut() {
    this.auth.onSignOut();
    this.toggleMenu = 'close';
  }
}
