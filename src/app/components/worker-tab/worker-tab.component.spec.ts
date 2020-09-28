import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerTabComponent } from './worker-tab.component';

describe('WorkerTabComponent', () => {
  let component: WorkerTabComponent;
  let fixture: ComponentFixture<WorkerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
