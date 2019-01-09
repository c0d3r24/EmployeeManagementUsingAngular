import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  filteredEmployees: any[] = [];
  employeesSalaryTotal: number;
  currencyCode = 'USD';
  constructor() { }

  ngOnInit() {

  }

}
