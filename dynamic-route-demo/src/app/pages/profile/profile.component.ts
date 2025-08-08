import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './profile.component.html',
  template: `
    <h1>Profile Page(Lazy Loaded)</h1>
    <p><strong>params:</strong> {{ idFromParams }}</p>
    <p><strong>paramMap:</strong> {{ idFromParamMap }}</p>
    <p><strong>snapshot:</strong> {{ idFromSnapshot }}</p>
  `,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  idFromParams!: number;
  idFromParamMap!: string | null;
  idFromSnapshot!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // 1. Using params Observable
    this.route.params.subscribe(params => {
      this.idFromParams = +params['id'];  // Convert string to number
      // Number(params['id']) for a more generic conversion
      // or simply +params['id'] for a shorthand conversion
    });

    // 2. Using paramMap Observable
    this.route.paramMap.subscribe(paramMap => {
      this.idFromParamMap = paramMap.get('id');
    });

    // 3. Using snapshot
    this.idFromSnapshot = this.route.snapshot.paramMap.get('id');
  }
}
