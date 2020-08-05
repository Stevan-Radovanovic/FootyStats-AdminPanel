import { Component, OnInit } from '@angular/core';
import { Contract } from 'src/app/shared/models/contract.model';

@Component({
  selector: 'app-contract-default',
  templateUrl: './contract-default.component.html',
  styleUrls: ['./contract-default.component.css'],
})
export class ContractDefaultComponent implements OnInit {
  contracts: Contract[] = [
    { endDate: new Date(), startDate: new Date(), weeklySalary: 1000 },
    { endDate: new Date(), startDate: new Date(), weeklySalary: 12000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
