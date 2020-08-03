import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDefaultComponent } from './game-default/game-default.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GameDefaultComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
