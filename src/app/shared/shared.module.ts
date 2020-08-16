import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryPipe } from './pipes/salary.pipe';
import { StatsModule } from '../stats/stats.module';

@NgModule({
  declarations: [SalaryPipe],
  imports: [CommonModule, StatsModule],
  exports: [SalaryPipe],
})
export class SharedModule {}
