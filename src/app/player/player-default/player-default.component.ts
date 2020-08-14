import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { SessionService } from '../../shared/services/session.service';
import { PlayerHttpService } from '../../shared/services/player-http.service';
import { Subscription } from 'rxjs';
import { ContractDefaultComponent } from '../contract/contract-default/contract-default.component';
import { PlayerNewComponent } from '../player-new/player-new.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-player-default',
  templateUrl: './player-default.component.html',
  styleUrls: ['./player-default.component.css'],
})
export class PlayerDefaultComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  subs: Subscription[] = [];

  constructor(
    public modalServ: SessionService,
    public playerServ: PlayerHttpService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.playerServ.playerSubject.subscribe((players) => {
        this.players = players;
      })
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(PlayerNewComponent, {
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
