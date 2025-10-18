import { Component, computed, EventEmitter, Input, input, Output, signal } from '@angular/core';
import { DUMMY_USERS } from '../../jsonData/dummy-users';
let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); 

interface UserModel {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {
  // selectedUser = DUMMY_USERS[randomIndex];
  @Input({ required: true }) UserModel!:UserModel;
  @Output() userSelected = new EventEmitter<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(()=>`users/${this.selectedUser().avatar}`); 
  get imagePath() {
    return `users/${this.UserModel.avatar}`;
  }


  OnSelectUser() {{
    // randomIndex = Math.floor(Math.random() * DUMMY_USERS.length); 
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
     this.userSelected.emit(this.UserModel.id);
    }
  }
}
