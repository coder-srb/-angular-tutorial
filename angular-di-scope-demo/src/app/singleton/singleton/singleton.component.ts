import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-singleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
  constructor(public service: GlobalService) { }
}
