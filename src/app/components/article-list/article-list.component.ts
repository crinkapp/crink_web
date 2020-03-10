import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  @Input() title: string;
  @Input() thumbnail: string;
  @Input() hashtags: string[];
  @Input() likes: string;
  @Input() comments: string;
  @Input() time: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
