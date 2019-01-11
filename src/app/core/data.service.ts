import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IEmployee, IProject} from './../../app/shared/interfaces';


@Injectable()
export class DataService {

  baseUrl = 'assets/';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseUrl + 'employee.json')
                    .pipe(
                      catchError(this.handleError)
                    );
  }

  getEmployee(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee[]> (this.baseUrl  + 'employees.json')
                    .pipe(
                      map(emp => {
                        const employee = emp.filter((e : IEmployee) => e.id === id);
                        return (employee && employee.length) ? employee[0] : null;
                      }),
                      catchError(this.handleError)
                    );
  }

  getProjects(id: number): Observable<IProject[]> {
    return this.http.get<IProject[]> (this.baseUrl + 'projects.json')
                    .pipe(
                      map(projects => {
                        const empProjs = projects.filter((proj: IProject) => proj.employeeId === id);
                        return empProjs;
                      }),
                      catchError(this.handleError)
                    );
  }

  private handleError(error: any) {
    console.error('server error', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
