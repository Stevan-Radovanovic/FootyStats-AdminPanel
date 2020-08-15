import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import { GameHttpService } from 'src/app/shared/services/game-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css'],
})
export class GameDeleteComponent implements OnInit {
  constructor(
    public modalServ: SessionService,
    public gameServ: GameHttpService,
    public dialogRef: MatDialogRef<GameDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.gameDeleteDialogRef = this.dialogRef;
  }

  deleteGame() {
    this.gameServ.deleteGame(this.data.game);
  }

  close() {
    this.modalServ.gameDeleteDialogRef.close();
  }

  ngOnInit(): void {}
}
