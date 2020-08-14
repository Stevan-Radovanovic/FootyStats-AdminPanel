import { Component } from '@angular/core';
import { PlayerHttpService } from './shared/services/player-http.service';
import { GameHttpService } from './shared/services/game-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = false;

  title = 'footyStatsAdminPanel';

  constructor(
    public playerServ: PlayerHttpService,
    public gameServ: GameHttpService
  ) {
    this.playerServ.getPlayers();
    this.gameServ.getGames();
  }

  toggleSideMenu() {
    this.opened = !this.opened;
  }
}
