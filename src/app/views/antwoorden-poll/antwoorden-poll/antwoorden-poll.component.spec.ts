import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntwoordenPollComponent } from './antwoorden-poll.component';

describe('AntwoordenPollComponent', () => {
  let component: AntwoordenPollComponent;
  let fixture: ComponentFixture<AntwoordenPollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntwoordenPollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntwoordenPollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
