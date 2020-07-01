import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  hashtags: string[] = [
    'bouclés', 'soins', 'shampoings', 'twist'
  ]
  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
