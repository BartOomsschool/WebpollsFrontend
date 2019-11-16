import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VriendenLijstComponent } from './vrienden-lijst.component';

describe('VriendenLijstComponent', () => {
  let component: VriendenLijstComponent;
  let fixture: ComponentFixture<VriendenLijstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VriendenLijstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VriendenLijstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
