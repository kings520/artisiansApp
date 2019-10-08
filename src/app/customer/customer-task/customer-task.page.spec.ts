import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerTaskPage} from './customer-task.page';

describe('CustomerTaskPage', () => {
  let component: CustomerTaskPage;
  let fixture: ComponentFixture<CustomerTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
