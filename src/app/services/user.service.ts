import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isConnected: boolean = false;

  constructor() { }

  connexion() {
    this.isConnected = !this.isConnected;
  }
}
