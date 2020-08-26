import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovanjeAdminaComponent } from './registrovanje-admina.component';

describe('RegistrovanjeAdminaComponent', () => {
  let component: RegistrovanjeAdminaComponent;
  let fixture: ComponentFixture<RegistrovanjeAdminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrovanjeAdminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovanjeAdminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
