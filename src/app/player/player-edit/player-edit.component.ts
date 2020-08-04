import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit {
  @Input() player: Player;
  editPlayerForm: FormGroup;

  constructor() {}

  initForm() {
    this.editPlayerForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      position: new FormControl('', [Validators.required]),
      shirtNumber: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
