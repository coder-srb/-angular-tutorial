import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from '../directives/directives.module';
import { ClickColorDirective } from '../directives/click-color.directive';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, DirectivesModule, ClickColorDirective],
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

}
