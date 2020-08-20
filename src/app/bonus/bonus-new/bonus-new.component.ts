import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from 'src/app/shared/services/session.service';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { BonusHttpService } from 'src/app/shared/services/bonus-http.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Bonus } from 'src/app/shared/models/bonus.model';

@Component({
  selector: 'app-bonus-new',
  templateUrl: './bonus-new.component.html',
  styleUrls: ['./bonus-new.component.css'],
})
export class BonusNewComponent implements OnInit {
  newBonusForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<BonusNewComponent>,
    private bonusServ: BonusHttpService,
    public modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.bonusNewBottomSheetRef = this.bottomSheetRef;
  }

  initForm() {
    this.newBonusForm = new FormGroup({
      amount: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  addNewBonus() {
    const bonus: Bonus = {
      amount: this.newBonusForm.controls.amount.value,
      description: this.newBonusForm.controls.description.value,
      contractId: this.data.contract.id,
    };
    this.bonusServ.addNewBonus(bonus);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
