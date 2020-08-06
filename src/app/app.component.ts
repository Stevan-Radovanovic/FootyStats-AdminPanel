import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opened = false;

  title = 'footyStatsAdminPanel';

  constructor(public headerServ: HeaderService) {}

  toggleSideMenu() {
    this.opened = !this.opened;
  }
}
