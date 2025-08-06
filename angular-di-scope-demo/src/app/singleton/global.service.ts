import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  count = 0;
  increment(){
    this.count++;
  }
}
