import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDefaultComponent } from './game-default/game-default.component';
import { GameRoutingModule } from './game-routing.module';
import { GameItemComponent } from './game-item/game-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [GameDefaultComponent, GameItemComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
})
export class GameModule {}
