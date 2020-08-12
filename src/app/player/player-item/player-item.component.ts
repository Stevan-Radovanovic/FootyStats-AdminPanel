import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerModalService } from '../player-modal.service';
import { PlayerHttpService } from '../player-http.service';
import { MatDialog } from '@angular/material/dialog';
import { PlayerEditComponent } from '../player-edit/player-edit.component';
import { PlayerDeleteComponent } from '../player-delete/player-delete.component';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: Player;

  constructor(
    public modalServ: PlayerModalService,
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

  ngOnInit(): void {}
}
