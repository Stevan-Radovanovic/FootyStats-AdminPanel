import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatDefaultComponent } from './stat-default/stat-default.component';
import { StatItemComponent } from './stat-item/stat-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [StatDefaultComponent, StatItemComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
  ],
  exports: [StatDefaultComponent],
  entryComponents: [StatDefaultComponent],
})
export class StatsModule {}
