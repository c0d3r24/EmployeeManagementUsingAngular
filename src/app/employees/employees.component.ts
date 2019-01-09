import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title: string;
  employees: any[];

  constructor() { }

  ngOnInit() {
    this.title = 'Employees';
    this.employees = [
      { id: 1, name: 'Abd-Allah', city: 'Jeddah', salary: '6000', started: new Date(2017, 10, 10)},
      { id: 2, name: 'Humed Shaikh', city: 'Nagpur', salary: '5000', started: new Date(2018, 4, 4)},
      { id: 3, name: 'Mateen Athar', city: 'Nagpur', salary: '2500', started: new Date(2018, 11, 12)},
      { id: 4, name: 'Jeremy Tuner', city: 'New York', salary: '4000', started: new Date(2017, 10, 11)},
      { id: 5, name: 'Goerge Washington', city: 'Rochester', salary: '5000', started: new Date(2016, 12, 11)},
      { id: 6, name: 'Michael Bay', city: 'New Jersey', salary: '6000', started: new Date(2019, 1, 1)},
    ];
  }
}

