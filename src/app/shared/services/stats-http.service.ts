import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Statistic } from '../models/statistic.model';
import { HttpClient } from '@angular/common/http';
import { GameHttpService } from './game-http.service';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class StatsHttpService {
  statsSubject = new BehaviorSubject<Statistic[]>([]);
  stats: Statistic[] = [];

  createStat(stat: Statistic) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .post('http://localhost:3000/statistics', {
        goals: stat.goals,
        assists: stat.assists,
        playerId: stat.playerId,
        gameId: stat.gameId,
      })
      .subscribe((response: any) => {
        this.stats.push(stat);
        this.statsSubject.next(this.stats);
        this.modalServ.statNewBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = false;
      });
  }

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

  deleteStat(stat: Statistic) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .delete(
        'http://localhost:3000/statistics/' + stat.playerId + '&' + stat.gameId
      )
      .subscribe((result) => {
        this.stats = this.stats.filter((st) => {
          return st !== stat;
        });
        this.statsSubject.next(this.stats);
        this.modalServ.statDeleteBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = false;
      });
  }

  updateStat(stat: Statistic) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .put(
        'http://localhost:3000/statistics/' + stat.playerId + '&' + stat.gameId,
        {
          goals: stat.goals,
          assists: stat.assists,
        }
      )
      .subscribe((result) => {
        console.log(result);
        const index = this.stats.findIndex(
          (st) => st.playerId === stat.playerId && st.gameId === stat.gameId
        );
        this.stats[index] = stat;
        this.statsSubject.next(this.stats);
        this.modalServ.statEditBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = false;
      });
  }

  constructor(
    private http: HttpClient,
    private gameServ: GameHttpService,
    private modalServ: SessionService
  ) {}
}
