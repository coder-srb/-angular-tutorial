import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './user-card.component.html',
  template: `
  <div class="card">
    <h2>User Info</h2>
    <p>Name: {{name}}</p>
    <p>Email: {{email}}</p>
  </div>`,
  styles: [`
    .card{
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    background-color: #f9f9f9;
    }
    `],
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  name = 'John Doe';
  email = 'doe.john@gmail.com';
}
