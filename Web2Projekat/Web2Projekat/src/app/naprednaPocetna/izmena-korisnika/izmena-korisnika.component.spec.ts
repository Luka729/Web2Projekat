import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaKorisnikaComponent } from './izmena-korisnika.component';

describe('IzmenaKorisnikaComponent', () => {
  let component: IzmenaKorisnikaComponent;
  let fixture: ComponentFixture<IzmenaKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
