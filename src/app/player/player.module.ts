import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerRoutingModule } from './player-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { PlayerItemComponent } from './player-item/player-item.component';
import { MatIconModule } from '@angular/material/icon';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PlayerNewComponent } from './player-new/player-new.component';
import { MatDividerModule } from '@angular/material/divider';
import { ContractDefaultComponent } from './contract/contract-default/contract-default.component';
import { ContractItemComponent } from './contract/contract-item/contract-item.component';

@NgModule({
  declarations: [
    PlayerDefaultComponent,
    PlayerItemComponent,
    PlayerEditComponent,
    PlayerNewComponent,
    ContractDefaultComponent,
    ContractItemComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlayerRoutingModule,
    MatCardModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
  ],
})
export class PlayerModule {}
