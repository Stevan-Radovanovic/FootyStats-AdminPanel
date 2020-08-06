import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  styleUrls: ['./contract-new.component.css'],
})
export class ContractNewComponent implements OnInit {
  newContractForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractNewComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  initForm() {
    this.newContractForm = new FormGroup({
      weeklySalary: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
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
