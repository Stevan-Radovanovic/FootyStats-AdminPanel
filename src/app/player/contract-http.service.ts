import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../shared/models/contract.model';
import { PlayerModalService } from './player-modal.service';

@Injectable({
  providedIn: 'root',
})
export class ContractHttpService {
  constructor(
    private http: HttpClient,
    private modalServ: PlayerModalService
  ) {}

  addNewContract(contract: Contract, id: number) {
    this.http
      .post('http://localhost:3000/contracts', {
        startingDate: contract.startDate,
        endingDate: contract.endDate,
        weeklySalary: contract.weeklySalary,
        playerId: id,
      })
      .subscribe((result) => {
        console.log(result);
        this.modalServ.newDialogRef.close();
      });
  }
}
