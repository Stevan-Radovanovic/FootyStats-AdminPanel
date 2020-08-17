import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { StatsHttpService } from 'src/app/shared/services/stats-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { Game } from 'src/app/shared/models/game.model';
import { Player } from 'src/app/shared/models/player.model';
import { StatNewComponent } from '../stat-new/stat-new.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

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
    private bottomSheet: MatBottomSheet,
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

  openNewBottomSheet(): void {
    this.bottomSheet.open(StatNewComponent, {
      data: { player: this.data.player, game: this.data.game },
    });
  }

  close() {
    this.modalServ.statsDialogRef.close();
  }

  ngOnInit(): void {
    if (this.player) {
      this.statServ.getStatsByPlayerId(this.player.id);
    }
    if (this.game) {
      this.statServ.getStatsByGameId(this.game.id);
    }

    this.subs.push(
      this.statServ.statsSubject.subscribe((stats) => {
        this.stats = stats;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
