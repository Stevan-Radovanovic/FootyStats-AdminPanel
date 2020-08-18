import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { ContractHttpService } from '../../../shared/services/contract-http.service';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css'],
})
export class ContractDeleteComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractDeleteComponent>,
    private contractServ: ContractHttpService,
    public modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.deleteBottomSheetRef = this.bottomSheetRef;
  }

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }

  deleteContract() {
    this.contractServ.deleteContract(this.data.contract);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
