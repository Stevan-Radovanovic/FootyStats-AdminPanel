import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { Game } from 'src/app/shared/models/game.model';
import { Player } from 'src/app/shared/models/player.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StatEditComponent } from '../stat-edit/stat-edit.component';
import { StatDeleteComponent } from '../stat-delete/stat-delete.component';
import { PlayerHttpService } from 'src/app/shared/services/player-http.service';
import { GameHttpService } from 'src/app/shared/services/game-http.service';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.css'],
})
export class StatItemComponent implements OnInit {
  @Input() stat: Statistic;
  @Input() game: Game;
  @Input() player: Player;

  constructor(
    private bottomSheet: MatBottomSheet,
    private playerServ: PlayerHttpService,
    private gameServ: GameHttpService
  ) {}

  openEditBottomSheet(): void {
    this.bottomSheet.open(StatEditComponent, {
      data: { stat: this.stat },
    });
  }

  openDeleteBottomSheet(): void {
    this.bottomSheet.open(StatDeleteComponent, {
      data: { stat: this.stat },
    });
  }

  ngOnInit(): void {
    if (this.game) {
      this.player = this.playerServ.players.find(
        (pl) => pl.id === this.stat.playerId
      );
    }

    if (this.player) {
      this.game = this.gameServ.games.find(
        (gam) => gam.id === this.stat.gameId
      );
    }
  }
}
