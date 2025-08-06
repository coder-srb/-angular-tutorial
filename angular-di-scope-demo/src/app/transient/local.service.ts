import { Injectable } from '@angular/core';

@Injectable()
export class LocalService {
  count = 0;
  increment(){
    this.count++;
  }
}
