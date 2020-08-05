import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerModalService } from '../player-modal.service';

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css'],
})
export class PlayerNewComponent implements OnInit {
  addPlayerForm: FormGroup;

  constructor(public modalServ: PlayerModalService) {}

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

  ngOnInit(): void {
    this.initForm();
  }
}
