import { Component, OnInit, Input } from '@angular/core';
import { Bonus } from 'src/app/shared/models/bonus.model';

@Component({
  selector: 'app-bonus-item',
  templateUrl: './bonus-item.component.html',
  styleUrls: ['./bonus-item.component.css'],
})
export class BonusItemComponent implements OnInit {
  @Input() bonus: Bonus;

  constructor() {}

  ngOnInit(): void {}
}
