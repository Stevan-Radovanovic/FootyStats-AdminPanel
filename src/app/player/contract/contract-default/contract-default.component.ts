import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContractNewComponent } from '../contract-new/contract-new.component';
import { Player } from 'src/app/shared/models/player.model';

@Component({
  selector: 'app-contract-default',
  templateUrl: './contract-default.component.html',
  styleUrls: ['./contract-default.component.css'],
})
export class ContractDefaultComponent implements OnInit {
  @Input() player: Player;

  contracts: Contract[] = [
    { endDate: new Date(), startDate: new Date(), weeklySalary: 1000 },
    { endDate: new Date(), startDate: new Date(), weeklySalary: 12000 },
  ];

  constructor(private bottomSheet: MatBottomSheet) {}

  openNewBottomSheet(): void {
    this.bottomSheet.open(ContractNewComponent);
  }

  ngOnInit(): void {}
}
