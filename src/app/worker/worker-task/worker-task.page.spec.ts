import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkerTaskPage} from './worker-task.page';

describe('WorkerTaskPage', () => {
  let component: WorkerTaskPage;
  let fixture: ComponentFixture<WorkerTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
