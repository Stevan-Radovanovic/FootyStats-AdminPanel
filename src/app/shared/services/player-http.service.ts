import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../models/player.model';
import { SessionService } from './session.service';
import { ContractHttpService } from './contract-http.service';
import { Statistic } from '../models/statistic.model';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {
  playerSubject = new BehaviorSubject<Player[]>([]);
  players: Player[] = [];

  constructor(
    private http: HttpClient,
    private modalServ: SessionService,
    private contractServ: ContractHttpService
  ) {}

  getPlayers() {
    return this.http
      .get<{ players: Player[] }>('http://localhost:3000/players')
      .subscribe((response) => {
        console.log(response);
        this.players = response.players;
        this.playerSubject.next(this.players);
      });
  }

  deletePlayer(player: Player) {
    this.modalServ.dialogSpinnerFlag = true;
    this.http
      .delete('http://localhost:3000/players/' + player.id)
      .subscribe((result) => {
        this.players = this.players.filter((play) => {
          return play !== player;
        });
        console.log(result);
        this.playerSubject.next(this.players);
        this.modalServ.deleteDialogRef.close();
        this.modalServ.dialogSpinnerFlag = false;
      });
  }

  addNewPlayer(player: Player) {
    this.modalServ.dialogSpinnerFlag = true;
    this.http
      .post('http://localhost:3000/players', {
        fullName: player.fullName,
        number: player.number,
        position: player.position,
        dateOfBirth: player.dateOfBirth,
      })
      .subscribe((response: { message: string; player: Player }) => {
        player.id = response.player.id;
        this.players.push(player);
        this.playerSubject.next(this.players);
        this.contractServ.addNewContract(player.contracts[0], player.id);
      });
  }

  updatePlayer(player: Player) {
    this.modalServ.dialogSpinnerFlag = true;
    this.http
      .put('http://localhost:3000/players/' + player.id, {
        fullName: player.fullName,
        number: player.number,
        position: player.position,
        dateOfBirth: player.dateOfBirth,
      })
      .subscribe((result) => {
        const index = this.players.findIndex((pl) => pl.id === player.id);
        this.players[index] = player;
        this.playerSubject.next(this.players);
        this.modalServ.dialogSpinnerFlag = false;
        this.modalServ.editDialogRef.close();
      });
  }
}
