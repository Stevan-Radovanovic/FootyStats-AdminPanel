import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../shared/models/player.model';
import { PlayerModalService } from './player-modal.service';
import { ContractHttpService } from './contract-http.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerHttpService {
  playerSubject = new BehaviorSubject<Player[]>([]);
  players: Player[] = [];

  constructor(
    private http: HttpClient,
    private modalServ: PlayerModalService,
    private contractServ: ContractHttpService
  ) {}

  getPlayers() {
    return this.http
      .get<{ players: Player[] }>('http://localhost:3000/players/detail')
      .subscribe((response) => {
        console.log(response);
        this.players = response.players;
        this.playerSubject.next(this.players);
      });
  }

  deletePlayer(player: Player) {
    this.http
      .delete('http://localhost:3000/players/' + player.id)
      .subscribe((result) => {
        this.players = this.players.filter((play) => {
          return play !== player;
        });
        console.log(result);
        this.playerSubject.next(this.players);
        this.modalServ.toggleDeleteModal();
      });
  }

  addNewPlayer(player: Player) {
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
}
