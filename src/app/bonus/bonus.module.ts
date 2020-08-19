import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusDefaultComponent } from './bonus-default/bonus-default.component';
import { BonusItemComponent } from './bonus-item/bonus-item.component';
import { BonusNewComponent } from './bonus-new/bonus-new.component';
import { BonusEditComponent } from './bonus-edit/bonus-edit.component';
import { BonusDeleteComponent } from './bonus-delete/bonus-delete.component';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BonusDefaultComponent,
    BonusItemComponent,
    BonusNewComponent,
    BonusEditComponent,
    BonusDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatBottomSheetModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    SharedModule,
  ],
  exports: [BonusDefaultComponent],
  entryComponents: [BonusDefaultComponent],
})
export class BonusModule {}
