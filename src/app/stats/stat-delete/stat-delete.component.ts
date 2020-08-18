import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';
import { StatsHttpService } from 'src/app/shared/services/stats-http.service';

@Component({
  selector: 'app-stat-delete',
  templateUrl: './stat-delete.component.html',
  styleUrls: ['./stat-delete.component.css'],
})
export class StatDeleteComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<StatDeleteComponent>,
    private statServ: StatsHttpService,
    public modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.statDeleteBottomSheetRef = this.bottomSheetRef;
  }

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }

  deleteStat() {
    this.statServ.deleteStat(this.data.stat);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
