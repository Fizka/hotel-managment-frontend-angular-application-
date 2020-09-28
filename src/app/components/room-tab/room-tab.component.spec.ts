import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomTabComponent } from './room-tab.component';

describe('RoomTabComponent', () => {
  let component: RoomTabComponent;
  let fixture: ComponentFixture<RoomTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
