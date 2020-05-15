import { Component, OnInit } from '@angular/core';

type Page = 'main' | 'one' | 'two' | 'three' | 'four' | 'five';

@Component({
  selector: 'app-diagnostic-page',
  templateUrl: './diagnostic-page.component.html',
  styleUrls: ['./diagnostic-page.component.scss']
})
export class DiagnosticPageComponent implements OnInit {
  page: Page = 'main';

  constructor() { }

  ngOnInit() {
  }

  goToPage(p:Page) {
    this.page = p;
  }

}
