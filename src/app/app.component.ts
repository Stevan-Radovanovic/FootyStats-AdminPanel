import { Component } from '@angular/core';
import { PlayerHttpService } from './player/player-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = false;

  title = 'footyStatsAdminPanel';

  constructor(public playerServ: PlayerHttpService) {
    this.playerServ.getPlayers();
  }

  toggleSideMenu() {
    this.opened = !this.opened;
  }
}
