import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovanjeRentACarComponent } from './registrovanje-rent-a-car.component';

describe('RegistrovanjeRentACarComponent', () => {
  let component: RegistrovanjeRentACarComponent;
  let fixture: ComponentFixture<RegistrovanjeRentACarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrovanjeRentACarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovanjeRentACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
