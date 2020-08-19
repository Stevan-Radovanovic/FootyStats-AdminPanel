import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from './session.service';
import { BehaviorSubject } from 'rxjs';
import { Bonus } from '../models/bonus.model';

@Injectable({
  providedIn: 'root',
})
export class BonusHttpService {
  constructor(private http: HttpClient, private modalServ: SessionService) {}

  bonusSubject = new BehaviorSubject<Bonus[]>([]);
  bonuses: Bonus[] = [];

  addNewBonus(bonus: Bonus) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .post('http://localhost:3000/bonuses', {
        amount: bonus.amount,
        description: bonus.description,
        contractId: bonus.contractId,
      })
      .subscribe((result: { bonus: Bonus; message: string }) => {
        this.modalServ.newBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = false;
        this.bonuses.push(result.bonus);
        this.bonusSubject.next(this.bonuses);
      });
  }

  deleteBonus(bonus: Bonus) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .delete('http://localhost:3000/bonuses/' + bonus.id)
      .subscribe((result) => {
        this.bonuses = this.bonuses.filter((bon) => {
          return bon !== bonus;
        });
        this.bonusSubject.next(this.bonuses);
        this.modalServ.deleteBottomSheetRef.dismiss();
        this.modalServ.bottomSheetSpinnerFlag = true;
      });
  }

  updateBonus(bonus: Bonus) {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.http
      .put('http://localhost:3000/bonuses/' + bonus.id, {
        amount: bonus.amount,
        description: bonus.description,
      })
      .subscribe((result) => {
        console.log(result);
        const index = this.bonuses.findIndex((bo) => bo.id === bonus.id);
        this.bonuses[index] = bonus;
        this.bonusSubject.next(this.bonuses);
        this.modalServ.bottomSheetSpinnerFlag = false;
        this.modalServ.editBottomSheetRef.dismiss();
      });
  }

  getBonusesByContractId(id: number) {
    return this.http
      .get<{ bonus: Bonus[] }>('http://localhost:3000/bonuses/contract/' + id)
      .subscribe((response) => {
        console.log(response);
        this.bonuses = response.bonus;
        this.bonusSubject.next(this.bonuses);
      });
  }
}
