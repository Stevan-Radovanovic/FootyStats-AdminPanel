import { Component, OnInit, OnDestroy } from '@angular/core';
import { Player } from 'src/app/shared/models/player.model';
import { PlayerModalService } from '../player-modal.service';
import { PlayerHttpService } from '../player-http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-default',
  templateUrl: './player-default.component.html',
  styleUrls: ['./player-default.component.css'],
})
export class PlayerDefaultComponent implements OnInit, OnDestroy {
  players: Player[] = [];
  subs: Subscription[] = [];

  constructor(
    public modalServ: PlayerModalService,
    public playerServ: PlayerHttpService
  ) {}

  ngOnInit(): void {
    this.subs.push(
      this.playerServ.playerSubject.subscribe((players) => {
        this.players = players;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
