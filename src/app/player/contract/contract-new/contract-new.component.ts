import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contract } from 'src/app/shared/models/contract.model';
import { ContractHttpService } from '../../../shared/services/contract-http.service';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-contract-new',
  templateUrl: './contract-new.component.html',
  styleUrls: ['./contract-new.component.css'],
})
export class ContractNewComponent implements OnInit {
  newContractForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractNewComponent>,
    private contractServ: ContractHttpService,
    private modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.newBottomSheetRef = this.bottomSheetRef;
  }

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

  addNewContract() {
    const contract: Contract = {
      endingDate: this.newContractForm.controls.endDate.value,
      startingDate: this.newContractForm.controls.startDate.value,
      weeklySalary: this.newContractForm.controls.weeklySalary.value,
    };
    this.contractServ.addNewContract(contract, this.data.player.id);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
