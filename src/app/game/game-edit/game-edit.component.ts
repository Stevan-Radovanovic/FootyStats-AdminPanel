import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameHttpService } from 'src/app/shared/services/game-http.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/shared/models/game.model';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css'],
})
export class GameEditComponent implements OnInit {
  editGameForm: FormGroup;

  constructor(
    public gameServ: GameHttpService,
    public modalServ: SessionService,
    public dialogRef: MatDialogRef<GameEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.gameEditDialogRef = this.dialogRef;
  }

  initForm() {
    this.editGameForm = new FormGroup({
      opponent: new FormControl(this.data.game.opponentName, [
        Validators.required,
      ]),
      result: new FormControl(this.data.game.result, [Validators.required]),
      date: new FormControl(this.data.game.dateOfPlaying, [
        Validators.required,
      ]),
    });
  }

  close() {
    this.modalServ.gameEditDialogRef.close();
  }

  updateGame() {
    const game: Game = {
      id: this.data.game.id,
      opponentName: this.editGameForm.controls.opponent.value,
      result: this.editGameForm.controls.result.value,
      dateOfPlaying: this.editGameForm.controls.date.value,
    };

    this.gameServ.updateGame(game);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
