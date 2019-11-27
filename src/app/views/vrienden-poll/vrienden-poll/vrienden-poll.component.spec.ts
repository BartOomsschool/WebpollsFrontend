import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendenPollComponent } from './vrienden-poll.component';

describe('VriendenPollComponent', () => {
  let component: VriendenPollComponent;
  let fixture: ComponentFixture<VriendenPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendenPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendenPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
