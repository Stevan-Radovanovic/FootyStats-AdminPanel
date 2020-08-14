import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { SessionService } from '../../shared/services/session.service';
import { PlayerHttpService } from '../../shared/services/player-http.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerEditComponent } from '../player-edit/player-edit.component';
import { PlayerDeleteComponent } from '../player-delete/player-delete.component';
import { ContractDefaultComponent } from '../contract/contract-default/contract-default.component';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: Player;

  constructor(
    public modalServ: SessionService,
    public playerServ: PlayerHttpService,
    public dialog: MatDialog
  ) {}

  openDeleteDialog() {
    const dialogRef = this.dialog.open(PlayerDeleteComponent, {
      width: '500px',
      data: { player: this.player },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openUpdateDialog() {
    const dialogRef = this.dialog.open(PlayerEditComponent, {
      width: '500px',
      data: { player: this.player },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  openContractDialog() {
    const dialogRef = this.dialog.open(ContractDefaultComponent, {
      width: '500px',
      data: { player: this.player },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
