import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { StatsHttpService } from 'src/app/shared/services/stats-http.service';

@Component({
  selector: 'app-stat-edit',
  templateUrl: './stat-edit.component.html',
  styleUrls: ['./stat-edit.component.css'],
})
export class StatEditComponent implements OnInit {
  editStatForm: FormGroup;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<StatEditComponent>,
    public modalServ: SessionService,
    private statServ: StatsHttpService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.modalServ.statEditBottomSheetRef = this.bottomSheetRef;
  }

  close() {
    this.bottomSheetRef.dismiss();
  }

  initForm() {
    this.editStatForm = new FormGroup({
      goals: new FormControl(this.data.stat.goals, [Validators.required]),
      assists: new FormControl(this.data.stat.assists, [Validators.required]),
    });
  }

  editStat() {
    const stat: Statistic = {
      playerId: this.data.stat.playerId,
      gameId: this.data.stat.gameId,
      goals: this.editStatForm.controls.goals.value,
      assists: this.editStatForm.controls.assists.value,
    };
    this.statServ.updateStat(stat);
  }

  ngOnInit() {
    this.initForm();
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
