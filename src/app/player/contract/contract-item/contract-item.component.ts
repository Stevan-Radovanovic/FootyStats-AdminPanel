import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContractEditComponent } from '../contract-edit/contract-edit.component';
import { ContractDeleteComponent } from '../contract-delete/contract-delete.component';
import { BonusDefaultComponent } from 'src/app/bonus/bonus-default/bonus-default.component';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css'],
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;

  constructor(private bottomSheet: MatBottomSheet) {}

  openEditBottomSheet(): void {
    this.bottomSheet.open(ContractEditComponent, {
      data: { contract: this.contract },
    });
  }

  openDeleteBottomSheet(): void {
    this.bottomSheet.open(ContractDeleteComponent, {
      data: { contract: this.contract },
    });
  }

  openBonusBottomSheet(): void {
    this.bottomSheet.open(BonusDefaultComponent, {
      data: { contract: this.contract },
    });
  }

  ngOnInit(): void {}
}
