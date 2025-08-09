import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  idSnapshot: string | null = null;
  idFromParams!: string | null;
  idFromParamMap!: string | null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // 1) snapshot (one-time)
    this.idSnapshot = this.route.snapshot.params['id'];

    // 2) params observable (simple object)
    this.route.params.subscribe(params => {
      this.idFromParams = params['id'];
    });

    // 3) paramMap observable (preferred — has get(), has())
    this.route.paramMap.subscribe((pm: ParamMap) => {
      this.idFromParamMap = pm.get('id');
    });
  }

  goToNext() {
    // programmatic navigation (example)
    const nextId = Number(this.idSnapshot || this.idFromParamMap || 0) + 1;
    this.router.navigate(['/users', nextId]);
  }
}
