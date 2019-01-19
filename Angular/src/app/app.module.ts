import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {EmployeeService} from './services/emploee.service';
import { EmployeesEditComponent } from './employees/employees-edit/employees-edit.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { EmployeesAddComponent } from './employees/employees-add/employees-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeesEditComponent,
    EmployeesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,  {onSameUrlNavigation: 'reload'})
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
