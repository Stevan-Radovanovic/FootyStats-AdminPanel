import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerRoutingModule } from './player-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { PlayerItemComponent } from './player-item/player-item.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { PlayerNewComponent } from './player-new/player-new.component';
import { MatDividerModule } from '@angular/material/divider';
import { ContractDefaultComponent } from './contract/contract-default/contract-default.component';
import { ContractItemComponent } from './contract/contract-item/contract-item.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ContractDeleteComponent } from './contract/contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { ContractNewComponent } from './contract/contract-new/contract-new.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';

@NgModule({
  declarations: [
    PlayerDefaultComponent,
    PlayerItemComponent,
    PlayerEditComponent,
    PlayerNewComponent,
    ContractDefaultComponent,
    ContractItemComponent,
    ContractDeleteComponent,
    ContractEditComponent,
    ContractNewComponent,
    PlayerDeleteComponent,
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
    MatBottomSheetModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
  entryComponents: [
    ContractDeleteComponent,
    ContractEditComponent,
    ContractNewComponent,
    PlayerNewComponent,
    PlayerEditComponent,
    PlayerDeleteComponent,
    ContractDefaultComponent,
  ],
})
export class PlayerModule {}
