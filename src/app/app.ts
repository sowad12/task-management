import { Component, signal } from '@angular/core';
import {DUMMY_USERS} from '../jsonData/dummy-users';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  users = DUMMY_USERS;

  selectUserId?:string;
  get findUser(){
    return this.users.find(user=>user.id === this.selectUserId);
  }

  selectedUser(id:string){
    this.selectUserId = id;
  }
}
