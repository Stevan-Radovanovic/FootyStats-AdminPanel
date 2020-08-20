import { Component, OnInit, Input } from '@angular/core';
import { Bonus } from 'src/app/shared/models/bonus.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';
import { BonusHttpService } from 'src/app/shared/services/bonus-http.service';
import { BonusDeleteComponent } from '../bonus-delete/bonus-delete.component';
import { BonusEditComponent } from '../bonus-edit/bonus-edit.component';

@Component({
  selector: 'app-bonus-item',
  templateUrl: './bonus-item.component.html',
  styleUrls: ['./bonus-item.component.css'],
})
export class BonusItemComponent implements OnInit {
  @Input() bonus: Bonus;

  constructor(
    private bottomSheet: MatBottomSheet,
    public modalServ: SessionService,
    private bonusServ: BonusHttpService
  ) {}

  openDeleteBottomSheet(): void {
    this.bottomSheet.open(BonusDeleteComponent, {
      data: { bonus: this.bonus },
    });
  }

  openEditBottomSheet(): void {
    this.bottomSheet.open(BonusEditComponent, {
      data: { bonus: this.bonus },
    });
  }

  ngOnInit(): void {}
}
