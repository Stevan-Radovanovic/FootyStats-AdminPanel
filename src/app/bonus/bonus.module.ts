import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BonusDefaultComponent } from './bonus-default/bonus-default.component';
import { BonusItemComponent } from './bonus-item/bonus-item.component';
import { BonusNewComponent } from './bonus-new/bonus-new.component';
import { BonusEditComponent } from './bonus-edit/bonus-edit.component';
import { BonusDeleteComponent } from './bonus-delete/bonus-delete.component';

@NgModule({
  declarations: [
    BonusDefaultComponent,
    BonusItemComponent,
    BonusNewComponent,
    BonusEditComponent,
    BonusDeleteComponent,
  ],
  imports: [CommonModule],
  exports: [BonusDefaultComponent],
  entryComponents: [BonusDefaultComponent],
})
export class BonusModule {}
