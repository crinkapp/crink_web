import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  hashtags: string[] = [
    'bouclés', 'soins', 'shampoings', 'twist'
  ]
  user: User | null = null;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  ngOnInit() {
  }

}
