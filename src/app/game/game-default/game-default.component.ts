import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';

@Component({
  selector: 'app-game-default',
  templateUrl: './game-default.component.html',
  styleUrls: ['./game-default.component.css'],
})
export class GameDefaultComponent implements OnInit {
  games: Game[] = [
    { dateOfPlaying: new Date(), result: '2-1', opponent: 'Sevilla' },
    { dateOfPlaying: new Date(), result: '2-1', opponent: 'Sevilla' },
    { dateOfPlaying: new Date(), result: '2-1', opponent: 'Sevilla' },
    { dateOfPlaying: new Date(), result: '2-1', opponent: 'Sevilla' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
