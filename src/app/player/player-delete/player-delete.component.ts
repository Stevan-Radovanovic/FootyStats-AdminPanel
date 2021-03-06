import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from '../../shared/services/session.service';
import { PlayerHttpService } from '../../shared/services/player-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css'],
})
export class PlayerDeleteComponent implements OnInit {
  constructor(
    public modalServ: SessionService,
    public playerServ: PlayerHttpService,
    public dialogRef: MatDialogRef<PlayerDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.deleteDialogRef = this.dialogRef;
  }

  deletePlayer() {
    this.playerServ.deletePlayer(this.data.player);
  }

  close() {
    this.modalServ.deleteDialogRef.close();
  }

  ngOnInit(): void {}
}
