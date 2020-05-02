import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  scrolled: boolean = false;
  constructor() {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event']) onWindowScroll(e: any) {
    let scroll = e.target['scrollingElement'].scrollTop;
    scroll > 140 ? this.scrolled = true : this.scrolled = false;
  }
}
