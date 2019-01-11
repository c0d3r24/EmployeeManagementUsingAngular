import { Component, OnInit } from '@angular/core';
import { IEmployee } from './../shared/interfaces';
import { DataService } from './../core/data.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title: string;
  employees: IEmployee[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'Employees';
    // this.employees = [
    //   { id: 1, name: 'Abd Allah', city: 'Jeddah', salary: 6000, started: new Date(2017, 10, 10), projects: 2},
    //   { id: 2, name: 'Humed Shaikh', city: 'Nagpur', salary: 5000, started: new Date(2018, 4, 4), projects: 2},
    //   { id: 3, name: 'Mateen Athar', city: 'Nagpur', salary: 2500, started: new Date(2018, 11, 12), projects: 3},
    //   { id: 4, name: 'Jeremy Tuner', city: 'New York', salary: 4000, started: new Date(2017, 10, 11), projects: 1},
    //   { id: 5, name: 'Goerge Washington', city: 'Rochester', salary: 5000, started: new Date(2016, 12, 11), projects: 1},
    //   { id: 6, name: 'Michael Bay', city: 'New Jersey', salary: 6000, started: new Date(2019, 1, 1), projects: 2},
    // ];
  }
}

