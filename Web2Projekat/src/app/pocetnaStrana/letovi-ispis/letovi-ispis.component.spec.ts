import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetoviIspisComponent } from './letovi-ispis.component';

describe('LetoviIspisComponent', () => {
  let component: LetoviIspisComponent;
  let fixture: ComponentFixture<LetoviIspisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetoviIspisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetoviIspisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
