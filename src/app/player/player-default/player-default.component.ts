import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-player-default',
  templateUrl: './player-default.component.html',
  styleUrls: ['./player-default.component.css'],
})
export class PlayerDefaultComponent implements OnInit {
  players: Player[] = [
    {
      dateOfBirth: new Date(),
      fullName: 'Player',
      shirtNumber: 10,
      position: 'Attacker',
    },
    {
      dateOfBirth: new Date(),
      fullName: 'Player',
      shirtNumber: 10,
      position: 'Attacker',
    },
    {
      dateOfBirth: new Date(),
      fullName: 'Player',
      shirtNumber: 10,
      position: 'Attacker',
    },
    {
      dateOfBirth: new Date(),
      fullName: 'Player',
      shirtNumber: 10,
      position: 'Attacker',
    },
    {
      dateOfBirth: new Date(),
      fullName: 'Player',
      shirtNumber: 10,
      position: 'Attacker',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
