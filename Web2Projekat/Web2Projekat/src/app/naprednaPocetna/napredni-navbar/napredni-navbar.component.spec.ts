import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NapredniNavbarComponent } from './napredni-navbar.component';

describe('NapredniNavbarComponent', () => {
  let component: NapredniNavbarComponent;
  let fixture: ComponentFixture<NapredniNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NapredniNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NapredniNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
