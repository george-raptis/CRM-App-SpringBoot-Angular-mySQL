import { Component, OnInit } from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/emploee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[];

  constructor(private service: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.service.findAll()
      .subscribe(data => this.employees = data);
  }

  delete(employee: Employee) {
    console.log(employee.id);
    this.service.deleteEmployee(employee.id).subscribe(
      data => {
        this.employees = this.employees.filter(e => e !== employee);
      });
  }

  edit(employee: Employee) {
    localStorage.removeItem('editCustomerId');
    localStorage.setItem('editCustomerId', employee.id.toString());
    this.router.navigate(['edit']);
  }
}
