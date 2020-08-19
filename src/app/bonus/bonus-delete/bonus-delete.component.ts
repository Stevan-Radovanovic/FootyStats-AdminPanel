import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { BonusHttpService } from 'src/app/shared/services/bonus-http.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-bonus-delete',
  templateUrl: './bonus-delete.component.html',
  styleUrls: ['./bonus-delete.component.css'],
})
export class BonusDeleteComponent implements OnInit {
  constructor(
    public bottomSheetRef: MatBottomSheetRef<BonusDeleteComponent>,
    private bonusServ: BonusHttpService,
    public modalServ: SessionService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.bonusDeleteBottomSheetRef = this.bottomSheetRef;
  }

  ngOnInit(): void {}

  close() {
    this.bottomSheetRef.dismiss();
  }

  deleteBonus() {
    console.log(this.data.bonus);
    this.bonusServ.deleteBonus(this.data.bonus);
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
