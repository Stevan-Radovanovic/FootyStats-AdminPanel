import { Component, OnInit, Input } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css'],
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;

  constructor() {}

  ngOnInit(): void {}
}
