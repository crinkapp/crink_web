import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-article-page',
  templateUrl: './create-article-page.component.html',
  styleUrls: ['./create-article-page.component.scss']
})
export class CreateArticlePageComponent implements OnInit {
  addedImage: boolean = false;
  thumnnail = '';

  constructor() { }

  ngOnInit() {
  }

  onChange(e: any) {
    if (!this.addedImage) {
      this.addedImage = true;
    }
    this.thumnnail = window.URL.createObjectURL(e);
    console.log(this.thumnnail);
    
  }

}
