import { Component, OnInit, Inject } from '@angular/core';
import { Bonus } from 'src/app/shared/models/bonus.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { BonusHttpService } from 'src/app/shared/services/bonus-http.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-bonus-edit',
  templateUrl: './bonus-edit.component.html',
  styleUrls: ['./bonus-edit.component.css'],
})
export class BonusEditComponent implements OnInit {
  editBonusForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<BonusEditComponent>,
    private bonusServ: BonusHttpService,
    public modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.bonusEditBottomSheetRef = this.bottomSheetRef;
  }

  initForm() {
    console.log(this.data.bonus);
    this.editBonusForm = new FormGroup({
      amount: new FormControl(this.data.bonus.amount, [Validators.required]),
      description: new FormControl(this.data.bonus.description, [
        Validators.required,
      ]),
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  editBonus() {
    const bonus: Bonus = {
      id: this.data.bonus.id,
      amount: this.editBonusForm.controls.amount.value,
      description: this.editBonusForm.controls.description.value,
    };
    this.bonusServ.updateBonus(bonus);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
