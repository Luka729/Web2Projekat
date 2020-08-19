import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentacarComponentComponent } from './rentacar-component.component';

describe('RentacarComponentComponent', () => {
  let component: RentacarComponentComponent;
  let fixture: ComponentFixture<RentacarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentacarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentacarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
