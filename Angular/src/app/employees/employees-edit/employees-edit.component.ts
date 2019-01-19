import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmployeeService} from '../../services/emploee.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {

  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: EmployeeService) { }

  ngOnInit() {
    const customerId = parseInt(localStorage.getItem('editCustomerId'), 10);

    this.editForm = this.formBuilder.group({
      id: [customerId],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.service.getById(customerId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateEmployee(this.editForm.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }
}
