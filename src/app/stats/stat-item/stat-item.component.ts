import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from 'src/app/shared/models/statistic.model';
import { Game } from 'src/app/shared/models/game.model';
import { Player } from 'src/app/shared/models/player.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { StatEditComponent } from '../stat-edit/stat-edit.component';
import { StatDeleteComponent } from '../stat-delete/stat-delete.component';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.css'],
})
export class StatItemComponent implements OnInit {
  @Input() stat: Statistic;
  @Input() game: Game;
  @Input() player: Player;

  constructor(private bottomSheet: MatBottomSheet) {}

  openEditBottomSheet(): void {
    this.bottomSheet.open(StatEditComponent, {
      data: { stat: this.stat },
    });
  }

  openDeleteBottomSheet(): void {
    this.bottomSheet.open(StatDeleteComponent, {
      data: { stat: this.stat },
    });
  }

  ngOnInit(): void {}
}
