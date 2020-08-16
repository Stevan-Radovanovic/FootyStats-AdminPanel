import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Statistic } from '../models/statistic.model';
import { HttpClient } from '@angular/common/http';
import { GameHttpService } from './game-http.service';

@Injectable({
  providedIn: 'root',
})
export class StatsHttpService {
  statsSubject = new BehaviorSubject<Statistic[]>([]);
  stats: Statistic[] = [];

  getStatsByPlayerId(id: number) {
    this.http
      .get('http://localhost:3000/statistics/player-stats/' + id)
      .subscribe((response: any) => {
        console.log(response);
        this.stats = response.stats;
        this.statsSubject.next(this.stats);
      });
  }

  getStatsByGameId(id: number) {
    this.http
      .get('http://localhost:3000/statistics/game-stats/' + id)
      .subscribe((response: any) => {
        console.log(response);
        this.stats = response.stats;
        this.statsSubject.next(this.stats);
      });
  }

  constructor(private http: HttpClient, private gameServ: GameHttpService) {}
}
