import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-stat-new',
  templateUrl: './stat-new.component.html',
  styleUrls: ['./stat-new.component.css'],
})
export class StatNewComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<StatNewComponent>,
    private modalServ: SessionService
  ) {
    this.modalServ.statNewBottomSheetRef = this.bottomSheetRef;
  }

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
