import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-create-article-page",
  templateUrl: "./create-article-page.component.html",
  styleUrls: ["./create-article-page.component.scss"],
})
export class CreateArticlePageComponent implements OnInit {
  thumbnail: object | null = null;
  hashtags: any[] | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  onChange(e: any) {
    const img = window.URL.createObjectURL(e);
    this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(img);
  }
}
