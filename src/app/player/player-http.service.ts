import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Player } from '../shared/models/player.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {
  playerSubject = new BehaviorSubject<Player[]>([]);
  players: Player[] = [];

  constructor(private http: HttpClient) {}

  getPlayers() {
    return this.http
      .get<{ players: Player[] }>('http://localhost:3000/players')
      .subscribe((response) => {
        console.log(response);
        this.players = response.players;
        this.playerSubject.next(this.players);
      });
  }
}
