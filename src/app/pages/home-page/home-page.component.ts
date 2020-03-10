import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  articles = [
    {
      title: 'Comment peigner vos cheveux bouclés ?',
      thumbnail: 'article-1.jpeg',
      hashtags: ['bouclés', 'peigne'],
      likes: '481',
      comments: '24',
      time: '8',
      date: '17/02/20'
    },
    {
      title: 'Quel shampoing choisir pour ses cheveux cassés ?',
      thumbnail: 'article-2.jpeg',
      hashtags: ['cheveuxcassés', 'shampoing'],
      likes: '3 219',
      comments: '112',
      time: '20',
      date: '05/02/20'
    },
    {
      title: 'Entretenir son afro ? On vous dévoile tout !',
      thumbnail: 'article-3.jpeg',
      hashtags: ['afro', 'lifestyle', 'soin'],
      likes: '43 913',
      comments: '1 031',
      time: '20',
      date: '25/12/19'
    },
    {
      title: '5 choses à savoir sur les cheveux crépus',
      thumbnail: 'article-4.jpeg',
      hashtags: ['crepus'],
      likes: '87',
      comments: '9',
      time: '5',
      date: '30/07/19'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
