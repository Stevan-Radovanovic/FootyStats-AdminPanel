import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../shared/models/contract.model';
import { PlayerModalService } from './player-modal.service';
import { BehaviorSubject } from 'rxjs';
import { MatDialogState } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ContractHttpService {
  constructor(
    private http: HttpClient,
    private modalServ: PlayerModalService
  ) {}

  contractSubject = new BehaviorSubject<Contract[]>([]);
  contracts: Contract[] = [];

  addNewContract(contract: Contract, id: number) {
    this.http
      .post('http://localhost:3000/contracts', {
        startingDate: contract.startingDate,
        endingDate: contract.endingDate,
        weeklySalary: contract.weeklySalary,
        playerId: id,
      })
      .subscribe((result: { contract: Contract; message: string }) => {
        if (this.modalServ.newDialogRef) {
          this.modalServ.newDialogRef.close();
        }
        if (this.modalServ.newBottomSheetRef) {
          this.modalServ.newBottomSheetRef.dismiss();
        }
        this.contracts.push(result.contract);
        this.contractSubject.next(this.contracts);
      });
  }

  deleteContract(contract: Contract) {
    this.http
      .delete('http://localhost:3000/contracts/' + contract.id)
      .subscribe((result) => {
        this.contracts = this.contracts.filter((cont) => {
          return cont !== contract;
        });
        this.contractSubject.next(this.contracts);
        this.modalServ.deleteBottomSheetRef.dismiss();
      });
  }

  updateContract(contract: Contract) {
    this.http
      .put('http://localhost:3000/contracts/' + contract.id, {
        startingDate: contract.startingDate,
        endingDate: contract.endingDate,
        weeklySalary: contract.weeklySalary,
      })
      .subscribe((result) => {
        console.log(result);
        const index = this.contracts.findIndex((co) => co.id === contract.id);
        this.contracts[index] = contract;
        this.contractSubject.next(this.contracts);
        this.modalServ.editBottomSheetRef.dismiss();
      });
  }

  getContractsByPlayerId(id: number) {
    return this.http
      .get<{ contract: Contract[] }>(
        'http://localhost:3000/contracts/player-all/' + id
      )
      .subscribe((response) => {
        console.log(response);
        this.contracts = response.contract;
        this.contractSubject.next(this.contracts);
      });
  }
}
