import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatDefaultComponent } from './stat-default/stat-default.component';
import { StatItemComponent } from './stat-item/stat-item.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { StatNewComponent } from './stat-new/stat-new.component';
import { StatEditComponent } from './stat-edit/stat-edit.component';
import { StatDeleteComponent } from './stat-delete/stat-delete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    StatDefaultComponent,
    StatItemComponent,
    StatNewComponent,
    StatEditComponent,
    StatDeleteComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
  exports: [StatDefaultComponent],
  entryComponents: [
    StatDefaultComponent,
    StatNewComponent,
    StatDeleteComponent,
    StatEditComponent,
  ],
})
export class StatsModule {}
