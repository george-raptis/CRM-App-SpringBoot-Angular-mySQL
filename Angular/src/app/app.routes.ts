import {Routes} from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {EmployeesEditComponent} from './employees/employees-edit/employees-edit.component';
import {EmployeesAddComponent} from './employees/employees-add/employees-add.component';

export const ROUTES: Routes = [
  { path: 'home', component: EmployeesComponent},
  { path: 'edit', component: EmployeesEditComponent },
  { path: 'create', component: EmployeesAddComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
