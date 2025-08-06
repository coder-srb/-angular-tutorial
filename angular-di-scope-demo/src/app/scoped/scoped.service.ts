import { Injectable } from '@angular/core';

@Injectable()
export class ScopedService {
  count = 0;
  increment() { this.count++; }
}
