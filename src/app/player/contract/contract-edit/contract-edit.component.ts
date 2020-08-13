import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css'],
})
export class ContractEditComponent implements OnInit {
  editContractForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractEditComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  initForm() {
    this.editContractForm = new FormGroup({
      weeklySalary: new FormControl(this.data.contract.weeklySalary, [
        Validators.required,
      ]),
      startDate: new FormControl(this.data.contract.startingDate, [
        Validators.required,
      ]),
      endDate: new FormControl(this.data.contract.endingDate, [
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

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
