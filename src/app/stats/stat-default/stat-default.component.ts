import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { StatsHttpService } from 'src/app/shared/services/stats-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { Game } from 'src/app/shared/models/game.model';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-stat-default',
  templateUrl: './stat-default.component.html',
  styleUrls: ['./stat-default.component.css'],
})
export class StatDefaultComponent implements OnInit, OnDestroy {
  stats: Statistic[] = [
    { assists: 1, goals: 1 },
    { assists: 1, goals: 1 },
    { assists: 1, goals: 1 },
    { assists: 1, goals: 1 },
  ];

  subs: Subscription[] = [];
  player: Player;
  game: Game;

  constructor(
    private modalServ: SessionService,
    private statServ: StatsHttpService,
    public dialogRef: MatDialogRef<StatDefaultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.statsDialogRef = this.dialogRef;

    if (this.data.game) {
      this.game = this.data.game;
    }

    if (this.data.player) {
      this.player = this.data.player;
    }
  }

  close() {
    this.modalServ.statsDialogRef.close();
  }

  ngOnInit(): void {
    /*this.subs.push(
      this.statServ.statsSubject.subscribe((stats) => {
        this.stats = stats;
      })
    );*/
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
