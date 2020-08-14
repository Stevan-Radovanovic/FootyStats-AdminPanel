import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameHttpService {
  gameSubject = new BehaviorSubject<Game[]>([]);
  games: Game[] = [];

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http
      .get<{ games: Game[] }>('http://localhost:3000/games')
      .subscribe((response) => {
        console.log(response);
        this.games = response.games;
        this.gameSubject.next(this.games);
      });
  }

  deleteGame(game: Game) {
    this.http
      .delete('http://localhost:3000/game/' + game.id)
      .subscribe((result) => {
        this.games = this.games.filter((ga) => {
          return ga !== game;
        });
        console.log(result);
        this.gameSubject.next(this.games);
      });
  }

  addNewGame(game: Game) {
    this.http
      .post('http://localhost:3000/games', {
        result: game.result,
        opponent: game.opponent,
        dateOfPlaying: game.dateOfPlaying,
      })
      .subscribe((response: { message: string; game: Game }) => {
        game.id = response.game.id;
        this.games.push(game);
        this.gameSubject.next(this.games);
      });
  }

  updateGame(game: Game) {
    this.http
      .put('http://localhost:3000/games/' + game.id, {
        result: game.result,
        opponent: game.opponent,
        dateOfPlaying: game.dateOfPlaying,
      })
      .subscribe((result) => {
        const index = this.games.findIndex((pl) => pl.id === game.id);
        this.games[index] = game;
        this.gameSubject.next(this.games);
      });
  }
}