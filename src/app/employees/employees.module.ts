import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesFilterTextboxComponent } from './employees-filter-textbox/employees-filter-textbox.component';

@NgModule({
  declarations: [ EmployeesComponent, EmployeesListComponent, EmployeesFilterTextboxComponent ],
  imports: [ CommonModule, SharedModule ],
  exports: [ EmployeesComponent ]
})
export class EmployeesModule { }
