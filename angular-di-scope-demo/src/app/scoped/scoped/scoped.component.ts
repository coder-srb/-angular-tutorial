import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopedService } from '../scoped.service';

@Component({
  selector: 'app-scoped',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scoped.component.html',
  styleUrls: ['./scoped.component.css']
})
export class ScopedComponent {
  constructor(public service: ScopedService) {}
}
