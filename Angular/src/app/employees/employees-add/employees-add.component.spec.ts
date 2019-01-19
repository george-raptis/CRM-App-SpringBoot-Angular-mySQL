import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAddComponent } from './employees-add.component';

describe('EmployeesAddComponent', () => {
  let component: EmployeesAddComponent;
  let fixture: ComponentFixture<EmployeesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
