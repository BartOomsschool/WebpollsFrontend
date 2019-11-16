import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntwoordToevoegenComponent } from './antwoord-toevoegen.component';

describe('AntwoordToevoegenComponent', () => {
  let component: AntwoordToevoegenComponent;
  let fixture: ComponentFixture<AntwoordToevoegenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntwoordToevoegenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntwoordToevoegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
