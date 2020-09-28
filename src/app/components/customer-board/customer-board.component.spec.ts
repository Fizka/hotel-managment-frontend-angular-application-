import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBoardComponent } from './customer-board.component';

describe('CustomerBoardComponent', () => {
  let component: CustomerBoardComponent;
  let fixture: ComponentFixture<CustomerBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
