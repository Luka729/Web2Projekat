import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajFilijaluComponent } from './dodaj-filijalu.component';

describe('DodajFilijaluComponent', () => {
  let component: DodajFilijaluComponent;
  let fixture: ComponentFixture<DodajFilijaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajFilijaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajFilijaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
