import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerBoardComponent } from './worker-board.component';

describe('WorkerBoardComponent', () => {
  let component: WorkerBoardComponent;
  let fixture: ComponentFixture<WorkerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
