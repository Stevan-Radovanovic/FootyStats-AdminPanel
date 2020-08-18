import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { Subscription } from 'rxjs';
import { GameHttpService } from 'src/app/shared/services/game-http.service';
import { GameNewComponent } from '../game-new/game-new.component';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-game-default',
  templateUrl: './game-default.component.html',
  styleUrls: ['./game-default.component.css'],
})
export class GameDefaultComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  subs: Subscription[] = [];

  constructor(
    private gameServ: GameHttpService,
    public dialog: MatDialog,
    public modalServ: SessionService
  ) {}

  ngOnInit(): void {
    this.modalServ.gamesSpinnerFlag = true;
    this.subs.push(
      this.gameServ.gameSubject.subscribe((games) => {
        this.games = games;
        this.modalServ.gamesSpinnerFlag = false;
      })
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(GameNewComponent, {
      width: '500px',
    });

    this.subs.push(
      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
