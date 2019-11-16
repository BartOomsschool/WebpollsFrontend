import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverzichtStemmenComponent } from './overzicht-stemmen.component';

describe('OverzichtStemmenComponent', () => {
  let component: OverzichtStemmenComponent;
  let fixture: ComponentFixture<OverzichtStemmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverzichtStemmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverzichtStemmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
