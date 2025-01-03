import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";

// import {DUMMY_USERS} from '../dummy-users'

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  avatar: string;
  name:string;
}

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  // avatar = input.required<string>(); 
  // select = output<string>();
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id)
  }
}
