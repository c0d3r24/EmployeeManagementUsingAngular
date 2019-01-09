import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [EmployeesComponent],
  imports: [CommonModule],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }
