import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlayerModalService } from '../player-modal.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css'],
})
export class PlayerEditComponent implements OnInit {
  @Input() player: Player;
  editPlayerForm: FormGroup;

  constructor(public modalServ: PlayerModalService) {}

  initForm() {
    this.editPlayerForm = new FormGroup({
      fullName: new FormControl(this.player.fullName, [Validators.required]),
      position: new FormControl(this.player.position, [Validators.required]),
      shirtNumber: new FormControl(this.player.shirtNumber, [
        Validators.required,
      ]),
      dateOfBirth: new FormControl(this.player.dateOfBirth, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }
}
