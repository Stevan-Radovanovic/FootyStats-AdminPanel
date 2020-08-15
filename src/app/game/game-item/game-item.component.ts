import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/shared/models/game.model';
import { MatDialog } from '@angular/material/dialog';
import { GameEditComponent } from '../game-edit/game-edit.component';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;

  constructor(public dialog: MatDialog) {}

  openUpdateDialog() {
    const dialogRef = this.dialog.open(GameEditComponent, {
      width: '500px',
      data: { game: this.game },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}
