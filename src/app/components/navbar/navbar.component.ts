import { Component, HostListener } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  scrolled: boolean = false;
  constructor(public router: Router) {}

  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {
    let scroll = e.target['scrollingElement'].scrollTop;
    scroll > 140 ? this.scrolled = true : this.scrolled = false;
  }
}
