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
    two?: 'wavy' | 'curly' | 'kinky' | null;
    three?: 'low' | 'normal' | 'high' | null;
    four?: 'low' | 'normal' | 'high' | null;
    five?: 'light' | 'medium' | 'heavy' | null;
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

  qTwo(choice: 'wavy' | 'curly' | 'kinky') {
    this.diagnostic.two = choice;
    this.page = 'three';
  }

  qThree(choice: 'low' | 'normal' | 'high') {
    this.diagnostic.three = choice;
    this.page = 'four';
  }

  qFour(choice: 'low' | 'normal' | 'high') {
    this.diagnostic.four = choice;
    this.page = 'five';
  }

  qFive(choice: 'light' | 'medium' | 'heavy') {
    this.diagnostic.five = choice;
    this.page = 'details';
  }

  onIgnore(n: number) {
    switch(n) {
      case 2:
        this.diagnostic.two = null;
        this.page = 'three';
        break;
      case 3:
        this.diagnostic.three = null;
        this.page = 'four';
        break;
      case 4:
        this.diagnostic.four = null;
        this.page = 'five';
        break;
      case 5:
        this.diagnostic.five = null;
        this.page = 'details';
        break;
    }
  }

}
