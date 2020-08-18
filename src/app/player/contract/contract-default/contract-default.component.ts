import { Component, OnInit, Input, Inject, OnDestroy } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContractNewComponent } from '../contract-new/contract-new.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SessionService } from '../../../shared/services/session.service';
import { Subscription } from 'rxjs';
import { ContractHttpService } from '../../../shared/services/contract-http.service';

@Component({
  selector: 'app-contract-default',
  templateUrl: './contract-default.component.html',
  styleUrls: ['./contract-default.component.css'],
})
export class ContractDefaultComponent implements OnInit, OnDestroy {
  contracts: Contract[] = [];
  subs: Subscription[] = [];

  constructor(
    private bottomSheet: MatBottomSheet,
    public modalServ: SessionService,
    private contractServ: ContractHttpService,
    public dialogRef: MatDialogRef<ContractDefaultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.modalServ.contractDialogRef = this.dialogRef;
  }

  openNewBottomSheet(): void {
    this.bottomSheet.open(ContractNewComponent, {
      data: { player: this.data.player },
    });
  }

  close() {
    this.modalServ.contractDialogRef.close();
  }

  ngOnInit(): void {
    this.modalServ.gamesSpinnerFlag = true;
    this.contractServ.getContractsByPlayerId(this.data.player.id);
    this.subs.push(
      this.contractServ.contractSubject.subscribe((contracts) => {
        this.contracts = contracts;
        this.modalServ.gamesSpinnerFlag = false;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.forEach((sub) => sub.unsubscribe());
    }
  }
}
