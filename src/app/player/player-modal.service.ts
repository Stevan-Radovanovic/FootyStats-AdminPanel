import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PlayerNewComponent } from './player-new/player-new.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';
import { ContractDefaultComponent } from './contract/contract-default/contract-default.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContractNewComponent } from './contract/contract-new/contract-new.component';
import { ContractDeleteComponent } from './contract/contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';

@Injectable({
  providedIn: 'root',
})
export class PlayerModalService {
  deleteModalOpened = false;
  editModalOpened = false;
  newModalOpened = false;
  contractsModalOpened = false;

  newDialogRef: MatDialogRef<PlayerNewComponent>;
  editDialogRef: MatDialogRef<PlayerEditComponent>;
  deleteDialogRef: MatDialogRef<PlayerDeleteComponent>;
  contractDialogRef: MatDialogRef<ContractDefaultComponent>;
  newBottomSheetRef: MatBottomSheetRef<ContractNewComponent>;
  deleteBottomSheetRef: MatBottomSheetRef<ContractDeleteComponent>;
  editBottomSheetRef: MatBottomSheetRef<ContractEditComponent>;

  constructor() {}
}
