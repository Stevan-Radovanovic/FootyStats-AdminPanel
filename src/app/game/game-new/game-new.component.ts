import { Component, OnInit } from '@angular/core';
import { GameHttpService } from 'src/app/shared/services/game-http.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from 'src/app/shared/models/game.model';

@Component({
  selector: 'app-game-new',
  templateUrl: './game-new.component.html',
  styleUrls: ['./game-new.component.css'],
})
export class GameNewComponent implements OnInit {
  addGameForm: FormGroup;

  constructor(
    public gameServ: GameHttpService,
    public modalServ: SessionService,
    public dialogRef: MatDialogRef<GameNewComponent>
  ) {
    this.modalServ.gameNewDialogRef = this.dialogRef;
  }

  initForm() {
    this.addGameForm = new FormGroup({
      opponent: new FormControl('', [Validators.required]),
      result: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]+-[0-9]+'),
      ]),
      date: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.modalServ.gameNewDialogRef.close();
  }

  saveGame() {
    const game: Game = {
      opponentName: this.addGameForm.controls.opponent.value,
      result: this.addGameForm.controls.result.value,
      dateOfPlaying: this.addGameForm.controls.date.value,
    };

    this.gameServ.addNewGame(game);
  }

  ngOnInit(): void {
    this.initForm();
  }
}
