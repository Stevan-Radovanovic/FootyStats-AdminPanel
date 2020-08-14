import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaryPipe } from './pipes/salary.pipe';

@NgModule({
  declarations: [SalaryPipe],
  imports: [CommonModule],
  exports: [SalaryPipe],
})
export class SharedModule {}
