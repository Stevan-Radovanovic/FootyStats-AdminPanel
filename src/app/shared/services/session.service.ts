import { Injectable } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PlayerNewComponent } from '../../player/player-new/player-new.component';
import { PlayerEditComponent } from '../../player/player-edit/player-edit.component';
import { PlayerDeleteComponent } from '../../player/player-delete/player-delete.component';
import { ContractDefaultComponent } from '../../player/contract/contract-default/contract-default.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContractNewComponent } from '../../player/contract/contract-new/contract-new.component';
import { ContractDeleteComponent } from '../../player/contract/contract-delete/contract-delete.component';
import { ContractEditComponent } from '../../player/contract/contract-edit/contract-edit.component';
import { GameNewComponent } from 'src/app/game/game-new/game-new.component';
import { GameEditComponent } from 'src/app/game/game-edit/game-edit.component';
import { GameDeleteComponent } from 'src/app/game/game-delete/game-delete.component';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
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

  gameNewDialogRef: MatDialogRef<GameNewComponent>;
  gameEditDialogRef: MatDialogRef<GameEditComponent>;
  gameDeleteDialogRef: MatDialogRef<GameDeleteComponent>;

  constructor() {}
}
