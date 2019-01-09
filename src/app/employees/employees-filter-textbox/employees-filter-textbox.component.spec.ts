import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesFilterTextboxComponent } from './employees-filter-textbox.component';

describe('EmployeesFilterTextboxComponent', () => {
  let component: EmployeesFilterTextboxComponent;
  let fixture: ComponentFixture<EmployeesFilterTextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesFilterTextboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesFilterTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
