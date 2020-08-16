import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Statistic } from '../models/statistic.model';

@Injectable({
  providedIn: 'root',
})
export class StatsHttpService {
  statsSubject = new BehaviorSubject<Statistic[]>([]);
  stats: Statistic[] = [];

  constructor() {}
}
