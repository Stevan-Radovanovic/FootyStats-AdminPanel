import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerRoutingModule } from './player-routing.module';

@NgModule({
  declarations: [PlayerDefaultComponent],
  imports: [CommonModule, PlayerRoutingModule],
})
export class PlayerModule {}
