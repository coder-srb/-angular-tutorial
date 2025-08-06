import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../models/player';

@Pipe({
  name: 'sortByScore',
  standalone: true
})
export class SortByScorePipe implements PipeTransform {

  transform(value: Player[]): Player[] {
    return value.sort((a, b) => a.score - b.score);
  }

}
