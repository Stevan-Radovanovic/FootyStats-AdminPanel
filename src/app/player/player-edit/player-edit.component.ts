import { Component, OnInit, Input, Inject } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../../shared/services/session.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlayerHttpService } from '../../shared/services/player-http.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit {
  editPlayerForm: FormGroup;

  constructor(
    public modalServ: SessionService,
    public playerServ: PlayerHttpService,
    public dialogRef: MatDialogRef<PlayerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.editDialogRef = this.dialogRef;
    console.log(data);
  }

  initForm() {
    this.editPlayerForm = new FormGroup({
      fullName: new FormControl(this.data.player.fullName, [
        Validators.required,
      ]),
      position: new FormControl(this.data.player.position, [
        Validators.required,
      ]),
      shirtNumber: new FormControl(this.data.player.number, [
        Validators.required,
      ]),
      dateOfBirth: new FormControl(this.data.player.dateOfBirth, [
        Validators.required,
      ]),
    });
  }

  updatePlayer() {
    const player: Player = {
      id: this.data.player.id,
      fullName: this.editPlayerForm.controls.fullName.value,
      number: this.editPlayerForm.controls.shirtNumber.value,
      dateOfBirth: this.editPlayerForm.controls.dateOfBirth.value,
      position: this.editPlayerForm.controls.position.value,
    };
    this.playerServ.updatePlayer(player);
  }

  close() {
    this.modalServ.editDialogRef.close();
  }
  ngOnInit(): void {
    this.initForm();
  }
}
