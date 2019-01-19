import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Employee} from '../models/employee';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class EmployeeService {

  private url = 'http://localhost:8080/api/employees';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  findAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  getById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee, {headers: this.httpHeaders});
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url, employee, {headers: this.httpHeaders});
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${id}`, {headers: this.httpHeaders});
  }

}
