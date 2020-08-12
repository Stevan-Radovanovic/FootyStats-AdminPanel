import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerHttpService } from '../player-http.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css'],
})
export class PlayerNewComponent implements OnInit {
  addPlayerForm: FormGroup;

  constructor(
    public playerServ: PlayerHttpService,
    public dialogRef: MatDialogRef<PlayerNewComponent>
  ) {}

  initForm() {
    this.addPlayerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      shirtNumber: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      weeklySalary: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.dialogRef.close();
  }

  savePlayer() {
    const player: Player = {
      fullName: this.addPlayerForm.controls.fullName.value,
      number: this.addPlayerForm.controls.shirtNumber.value,
      dateOfBirth: this.addPlayerForm.controls.dateOfBirth.value,
      position: this.addPlayerForm.controls.position.value,
      contracts: [
        {
          startDate: this.addPlayerForm.controls.startDate.value,
          endDate: this.addPlayerForm.controls.endDate.value,
          weeklySalary: this.addPlayerForm.controls.weeklySalary.value,
        },
      ],
    };

    this.playerServ
      .addNewPlayer(player)
      .subscribe((response: { message: string; player: Player }) => {
        player.id = response.player.id;
        this.playerServ.players.push(player);
        this.playerServ.playerSubject.next(this.playerServ.players);
        this.dialogRef.close();
      });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
