import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../models/player';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SortByScorePipe } from '../pipes/sort-by-score.pipe';

@Component({
  selector: 'app-display-players',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, SortByScorePipe],
  templateUrl: './display-players.component.html',
  styleUrls: ['./display-players.component.css']
})
export class DisplayPlayersComponent implements OnInit{

  players: Player[] = [];

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get<Player[]>('assets/mocks/players.json').subscribe(data => {
      this.players = data
    });
  }
}
