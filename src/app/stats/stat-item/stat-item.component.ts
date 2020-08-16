import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from 'src/app/shared/models/statistic.model';

@Component({
  selector: 'app-stat-item',
  templateUrl: './stat-item.component.html',
  styleUrls: ['./stat-item.component.css'],
})
export class StatItemComponent implements OnInit {
  @Input() stat: Statistic;

  constructor() {}

  ngOnInit(): void {}
}
