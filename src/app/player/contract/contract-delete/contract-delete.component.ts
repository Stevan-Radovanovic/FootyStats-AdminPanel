import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contract-delete',
  templateUrl: './contract-delete.component.html',
  styleUrls: ['./contract-delete.component.css'],
})
export class ContractDeleteComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<ContractDeleteComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
