import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: Player;

  deleteModalOpened = false;
  editModalOpened = false;

  constructor() {}

  toggleDeleteModal() {
    this.deleteModalOpened = !this.deleteModalOpened;
  }

  toggleEditModal() {
    this.editModalOpened = !this.editModalOpened;
  }

  ngOnInit(): void {}
}
