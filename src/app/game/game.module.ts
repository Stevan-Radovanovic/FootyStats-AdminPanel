import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDefaultComponent } from './game-default/game-default.component';
import { GameRoutingModule } from './game-routing.module';
import { GameItemComponent } from './game-item/game-item.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { GameDeleteComponent } from './game-delete/game-delete.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameNewComponent } from './game-new/game-new.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameDefaultComponent,
    GameItemComponent,
    GameDeleteComponent,
    GameEditComponent,
    GameNewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatInputModule,
  ],
  entryComponents: [GameDeleteComponent, GameEditComponent, GameNewComponent],
})
export class GameModule {}
