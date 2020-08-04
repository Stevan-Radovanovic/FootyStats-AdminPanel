import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerRoutingModule } from './player-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { PlayerItemComponent } from './player-item/player-item.component';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlayerDefaultComponent, PlayerItemComponent],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MatCardModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class PlayerModule {}
