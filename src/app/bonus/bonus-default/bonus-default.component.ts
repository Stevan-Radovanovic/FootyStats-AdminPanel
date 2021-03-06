import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Bonus } from 'src/app/shared/models/bonus.model';
import { SessionService } from 'src/app/shared/services/session.service';
import { BonusHttpService } from 'src/app/shared/services/bonus-http.service';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { BonusNewComponent } from '../bonus-new/bonus-new.component';

@Component({
  selector: 'app-bonus-default',
  templateUrl: './bonus-default.component.html',
  styleUrls: ['./bonus-default.component.css'],
})
export class BonusDefaultComponent implements OnInit, OnDestroy {
  bonuses: Bonus[] = [];
  subs: Subscription[] = [];

  constructor(
    private bottomSheet: MatBottomSheet,
    public modalServ: SessionService,
    private bonusServ: BonusHttpService,
    public bottomSheetRef: MatBottomSheetRef<BonusDefaultComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.bonusBottomSheetRef = this.bottomSheetRef;
  }

  close() {
    this.modalServ.bonusBottomSheetRef.dismiss();
  }

  ngOnInit(): void {
    this.modalServ.bottomSheetSpinnerFlag = true;
    this.bonusServ.getBonusesByContractId(this.data.contract.id);
    this.subs.push(
      this.bonusServ.bonusSubject.subscribe((bonuses) => {
        this.bonuses = bonuses;
        this.modalServ.bottomSheetSpinnerFlag = false;
      })
    );
  }

  openNewBottomSheet(): void {
    this.bottomSheet.open(BonusNewComponent, {
      data: { contract: this.data.contract },
    });
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
