import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-stat-edit',
  templateUrl: './stat-edit.component.html',
  styleUrls: ['./stat-edit.component.css'],
})
export class StatEditComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<StatEditComponent>,
    private modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.statEditBottomSheetRef = this.bottomSheetRef;
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
