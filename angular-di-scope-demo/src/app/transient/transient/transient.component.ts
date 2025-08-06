import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalService } from '../local.service';

@Component({
  selector: 'app-transient',
  standalone: true,
  imports: [CommonModule],
  providers: [LocalService],
  template: `
    <h2>Transient Component</h2>
    <div class="card">
      <p>Local Count: {{ service.count }}</p>
      <button (click)="service.increment()">Increment</button>
    </div>
  `,
  styles: [`.card { border: 1px solid gray; padding: 10px; border-radius: 5px;}`]
})
export class TransientComponent {
  constructor(public service: LocalService) { }
}
