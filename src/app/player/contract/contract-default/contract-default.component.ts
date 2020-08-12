import { Component, OnInit, Input, Inject } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContractNewComponent } from '../contract-new/contract-new.component';
import { Player } from 'src/app/shared/models/player.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PlayerModalService } from '../../player-modal.service';

@Component({
  selector: 'app-contract-default',
  templateUrl: './contract-default.component.html',
  styleUrls: ['./contract-default.component.css'],
})
export class ContractDefaultComponent implements OnInit {
  contracts: Contract[] = [
    { endDate: new Date(), startDate: new Date(), weeklySalary: 1000 },
    { endDate: new Date(), startDate: new Date(), weeklySalary: 12000 },
  ];

  constructor(
    private bottomSheet: MatBottomSheet,
    private modalServ: PlayerModalService,
    public dialogRef: MatDialogRef<ContractDefaultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.contractDialogRef = this.dialogRef;
  }

  openNewBottomSheet(): void {
    this.bottomSheet.open(ContractNewComponent);
  }

  close() {
    this.modalServ.contractDialogRef.close();
  }

  ngOnInit(): void {}
}
