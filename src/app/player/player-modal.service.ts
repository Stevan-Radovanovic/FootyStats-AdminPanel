import { Injectable } from '@angular/core';
import { HeaderService } from '../header.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerModalService {
  deleteModalOpened = false;
  editModalOpened = false;
  newModalOpened = false;
  contractsModalOpened = false;

  constructor(private headerServ: HeaderService) {}

  toggleContractsModal() {
    this.contractsModalOpened = !this.contractsModalOpened;
    this.headerServ.invisible = !this.headerServ.invisible;
  }

  toggleNewModal() {
    this.newModalOpened = !this.newModalOpened;
    this.headerServ.invisible = !this.headerServ.invisible;
  }
  toggleDeleteModal() {
    this.deleteModalOpened = !this.deleteModalOpened;
    this.headerServ.invisible = !this.headerServ.invisible;
  }

  toggleEditModal() {
    this.editModalOpened = !this.editModalOpened;
    this.headerServ.invisible = !this.headerServ.invisible;
  }
}
