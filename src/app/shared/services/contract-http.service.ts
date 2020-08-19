import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contract } from '../models/contract.model';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContractHttpService {
  constructor(private http: HttpClient, private modalServ: SessionService) {}

  contractSubject = new BehaviorSubject<Contract[]>([]);
  contracts: Contract[] = [];

  addNewContract(contract: Contract, id: number) {
    this.modalServ.bottomSheetSpinnerFlag = true;
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
          this.modalServ.dialogSpinnerFlag = false;
        }
        if (this.modalServ.newBottomSheetRef) {
          this.modalServ.newBottomSheetRef.dismiss();
          this.modalServ.bottomSheetSpinnerFlag = false;
        }
        this.contracts.push(result.contract);
        this.contractSubject.next(this.contracts);
      });
  }

  deleteContract(contract: Contract) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .delete('http://localhost:3000/contracts/' + contract.id)
      .subscribe((result) => {
        this.contracts = this.contracts.filter((cont) => {
          return cont !== contract;
        });
        this.contractSubject.next(this.contracts);
        this.modalServ.deleteBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = true;
      });
  }

  updateContract(contract: Contract) {
    this.modalServ.bottomSheetSpinnerFlag = true;
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
        this.modalServ.bottomSheetSpinnerFlag = false;
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
