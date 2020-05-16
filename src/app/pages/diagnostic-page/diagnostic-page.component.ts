import { Component, OnInit } from '@angular/core';

type Page = 'main' | 'one' | 'two' | 'three' | 'four' | 'five' | 'details';

@Component({
  selector: 'app-diagnostic-page',
  templateUrl: './diagnostic-page.component.html',
  styleUrls: ['./diagnostic-page.component.scss']
})
export class DiagnosticPageComponent implements OnInit {
  page: Page = 'main';
  diagnostic: {
    one: boolean | null;
    two?: number;
    three?: number;
    four?: number;
    five?: number;
  } = { one: true };

  constructor() { }

  ngOnInit() {
  }

  goToPage(p:Page) {
    this.page = p;
  }

  qOne(choice: boolean) {
    this.diagnostic.one = choice;
    choice ? this.page = 'details' : this.page = 'two';
  }

  qTwo(choice: number) {
    this.diagnostic.two = choice;
    this.page = 'three';
  }

  qThree(choice: number) {
    this.diagnostic.three = choice;
    this.page = 'four';
  }

  qFour(choice: number) {
    this.diagnostic.four = choice;
    this.page = 'five';
  }

  qFive(choice: number) {
    this.diagnostic.five = choice;
    this.page = 'details';
  }

  onIgnore(n: number) {
    switch(n) {
      case 2:
        this.diagnostic.two = 0;
        this.page = 'three';
        break;
      case 3:
        this.diagnostic.three = 0;
        this.page = 'four';
        break;
      case 4:
        this.diagnostic.four = 0;
        this.page = 'five';
        break;
      case 5:
        this.diagnostic.five = 0;
        this.page = 'details';
        break;
    }
  }

}
