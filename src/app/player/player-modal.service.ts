import { Injectable } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PlayerNewComponent } from './player-new/player-new.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerDefaultComponent } from './player-default/player-default.component';
import { PlayerDeleteComponent } from './player-delete/player-delete.component';

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

  constructor() {}

  toggleContractsModal() {
    this.contractsModalOpened = !this.contractsModalOpened;
  }

  toggleNewModal() {
    this.newModalOpened = !this.newModalOpened;
  }

  toggleDeleteModal() {
    this.deleteModalOpened = !this.deleteModalOpened;
  }

  toggleEditModal() {
    this.editModalOpened = !this.editModalOpened;
  }
}
