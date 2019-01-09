import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent],
  imports: [CommonModule],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }
