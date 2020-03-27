import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovanjeComponent } from './registrovanje.component';

describe('RegistrovanjeComponent', () => {
  let component: RegistrovanjeComponent;
  let fixture: ComponentFixture<RegistrovanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrovanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
