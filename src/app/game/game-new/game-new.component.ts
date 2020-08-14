import { Component, OnInit } from '@angular/core';
import { GameHttpService } from 'src/app/shared/services/game-http.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      result: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.modalServ.gameNewDialogRef.close();
  }

  ngOnInit(): void {
    this.initForm();
  }
}
