import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contract } from 'src/app/shared/models/contract.model';
import { ContractHttpService } from '../../contract-http.service';
import { PlayerModalService } from '../../player-modal.service';

@Component({
  selector: 'app-contract-edit',
  templateUrl: './contract-edit.component.html',
  styleUrls: ['./contract-edit.component.css'],
})
export class ContractEditComponent implements OnInit {
  editContractForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractEditComponent>,
    public contractServ: ContractHttpService,
    private modalServ: PlayerModalService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.editBottomSheetRef = this.bottomSheetRef;
  }

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

  editContract() {
    const contract: Contract = {
      id: this.data.contract.id,
      endingDate: this.editContractForm.controls.endDate.value,
      startingDate: this.editContractForm.controls.startDate.value,
      weeklySalary: this.editContractForm.controls.weeklySalary.value,
    };
    this.contractServ.updateContract(contract);
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
