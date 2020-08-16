import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Statistic } from '../models/statistic.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StatsHttpService {
  statsSubject = new BehaviorSubject<Statistic[]>([]);
  stats: Statistic[] = [];

  getStatsByPlayerId(id: number) {
    return this.http
      .get('http://localhost:3000/players/stats/' + id)
      .pipe
      /* map((games: [{ opponentName: string; statistic: Statistic }]) => {
          return { ...game.statistic, opponentName: game.opponentName };
        })*/
      ()
      .subscribe((response) => {
        console.log(response);
      });
  }

  constructor(private http: HttpClient) {}
}
