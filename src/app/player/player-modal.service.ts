import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerModalService {
  deleteModalOpened = false;
  editModalOpened = false;
  newModalOpened = false;

  constructor() {}

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
