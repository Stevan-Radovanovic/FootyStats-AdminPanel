import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerModalService } from '../player-modal.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css'],
})
export class PlayerNewComponent implements OnInit {
  addPlayerForm: FormGroup;

  constructor(
    public modalServ: PlayerModalService,
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

  ngOnInit(): void {
    this.initForm();
  }
}
