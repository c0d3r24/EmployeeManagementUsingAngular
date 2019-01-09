import { Component, OnInit } from '@angular/core';
import { IEmployee } from './../../shared/interfaces';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  filteredEmployees: IEmployee[] = [];
  employeesSalaryTotal: number;
  currencyCode = 'USD';
  constructor() { }

  ngOnInit() {

  }

}
