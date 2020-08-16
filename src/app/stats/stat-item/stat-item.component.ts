import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { Game } from 'src/app/shared/models/game.model';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.css'],
})
export class StatItemComponent implements OnInit {
  @Input() stat: Statistic;
  @Input() game: Game;
  @Input() player: Player;

  constructor() {}

  ngOnInit(): void {}
}
