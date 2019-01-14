import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from './../../shared/interfaces';
import { SorterService } from './../../core/sorter.service';
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  private _employees: IEmployee[];
  @Input() get employees(): IEmployee[] {
    return this._employees;
  }
  set employees(value: IEmployee[]) {
    if (value) {
      this.filteredEmployees = this._employees = value;
      this.calculateEmployeesProjects();
    }
  }

  filteredEmployees: IEmployee[] = [];
  employeesProjectCount: number;
  currencyCode = 'USD';
  constructor(private sorterService: SorterService) { }

  ngOnInit() {
  }

  filter( data: string ) {
    if ( data ) {
      this.filteredEmployees = this.employees.filter((emp: IEmployee) => {
        return emp.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               emp.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               emp.projects.toString().indexOf(data) > -1;
      });
    } else {
      this.filteredEmployees = this.employees;
    }
    this.calculateEmployeesProjects();
  }

  calculateEmployeesProjects() {
    this.employeesProjectCount = 0;
    this.filteredEmployees.forEach((emp: IEmployee) => {
      this.employeesProjectCount += emp.projects;
    });
  }

  sortEmployee(field: string) {
    this.sorterService.sort(this.filteredEmployees, field);
  }

}
