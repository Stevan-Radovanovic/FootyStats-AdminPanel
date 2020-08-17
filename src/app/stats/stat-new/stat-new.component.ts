import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { SessionService } from 'src/app/shared/services/session.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { StatsHttpService } from 'src/app/shared/services/stats-http.service';

@Component({
  selector: 'app-stat-new',
  templateUrl: './stat-new.component.html',
  styleUrls: ['./stat-new.component.css'],
})
export class StatNewComponent implements OnInit {
  newStatForm: FormGroup;
  playerId: number;
  gameId: number;

  constructor(
    public bottomSheetRef: MatBottomSheetRef<StatNewComponent>,
    private statServ: StatsHttpService,
    private modalServ: SessionService
  ) {
    this.modalServ.statNewBottomSheetRef = this.bottomSheetRef;
  }

  initForm() {
    this.newStatForm = new FormGroup({
      goals: new FormControl('', [Validators.required]),
      assists: new FormControl('', [Validators.required]),
      player: new FormControl('', [Validators.required]),
      game: new FormControl('', [Validators.required]),
    });
  }

  newStat() {
    const stat: Statistic = {
      playerId: this.playerId,
      gameId: this.gameId,
      goals: this.newStatForm.controls.goals.value,
      assists: this.newStatForm.controls.assists.value,
    };
    console.log(stat);
  }

  ngOnInit() {
    this.initForm();
  }

  close() {
    this.bottomSheetRef.dismiss();
  }
  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
