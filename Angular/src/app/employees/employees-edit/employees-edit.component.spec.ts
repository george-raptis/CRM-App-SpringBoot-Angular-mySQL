import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesEditComponent } from './employees-edit.component';

describe('EmployeesEditComponent', () => {
  let component: EmployeesEditComponent;
  let fixture: ComponentFixture<EmployeesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
