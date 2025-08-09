import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent {
  users = [
    { id: 1, name: 'Alice' },
    { id: 42, name: 'Bob' },
    { id: 77, name: 'Charlie' }
  ];
}
