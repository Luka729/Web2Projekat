import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadjeniLetoviComponent } from './nadjeni-letovi.component';

describe('NadjeniLetoviComponent', () => {
  let component: NadjeniLetoviComponent;
  let fixture: ComponentFixture<NadjeniLetoviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadjeniLetoviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadjeniLetoviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
