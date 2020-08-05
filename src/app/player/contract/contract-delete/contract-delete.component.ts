import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css'],
})
export class ContractDeleteComponent implements OnInit {
  constructor(
    private bottomSheetRef: MatBottomSheetRef<ContractDeleteComponent>
  ) {}

  ngOnInit(): void {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
