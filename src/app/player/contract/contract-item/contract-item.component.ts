import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContractEditComponent } from '../contract-edit/contract-edit.component';
import { ContractDeleteComponent } from '../contract-delete/contract-delete.component';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css'],
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;

  constructor(private bottomSheet: MatBottomSheet) {}

  openEditBottomSheet(): void {
    this.bottomSheet.open(ContractEditComponent);
  }

  openDeleteBottomSheet(): void {
    this.bottomSheet.open(ContractDeleteComponent);
  }

  ngOnInit(): void {}
}
