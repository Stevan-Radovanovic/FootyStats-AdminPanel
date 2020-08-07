import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerModalService } from '../player-modal.service';
import { PlayerHttpService } from '../player-http.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css'],
})
export class PlayerItemComponent implements OnInit {
  @Input() player: Player;

  constructor(
    public modalServ: PlayerModalService,
    public playerServ: PlayerHttpService
  ) {}

  deletePlayer() {
    this.playerServ.deletePlayer(this.player);
  }

  ngOnInit(): void {}
}
