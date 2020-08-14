import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { Subscription } from 'rxjs';
import { GameHttpService } from 'src/app/shared/services/game-http.service';

@Component({
  selector: 'app-game-default',
  templateUrl: './game-default.component.html',
  styleUrls: ['./game-default.component.css'],
})
export class GameDefaultComponent implements OnInit, OnDestroy {
  games: Game[] = [];
  subs: Subscription[] = [];

  constructor(private gameServ: GameHttpService) {}

  ngOnInit(): void {
    this.subs.push(
      this.gameServ.gameSubject.subscribe((games) => {
        this.games = games;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
