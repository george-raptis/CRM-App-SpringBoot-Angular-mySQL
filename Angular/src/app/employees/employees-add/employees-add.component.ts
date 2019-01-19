import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/emploee.service';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmployeeService) { }

  createForm = this.formBuilder.group({
    id: [0],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    this.service.createEmployee(this.createForm.value)
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }
}
