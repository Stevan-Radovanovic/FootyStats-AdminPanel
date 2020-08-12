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
        startDate: contract.startDate,
        endDate: contract.endDate,
        weeklySalary: contract.weeklySalary,
        playerId: id,
      })
      .subscribe((result) => {
        this.modalServ.newDialogRef.close();
      });
  }
}
