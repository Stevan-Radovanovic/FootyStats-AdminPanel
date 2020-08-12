import { Component, OnInit, Input, Inject } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerModalService } from '../player-modal.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit {
  @Input() player: Player;
  editPlayerForm: FormGroup;

  constructor(
    public modalServ: PlayerModalService,
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

  close() {
    this.modalServ.editDialogRef.close();
  }
  ngOnInit(): void {
    this.initForm();
  }
}
