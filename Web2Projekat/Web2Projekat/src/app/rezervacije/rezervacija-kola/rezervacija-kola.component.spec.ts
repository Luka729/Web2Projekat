import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaKolaComponent } from './rezervacija-kola.component';

describe('RezervacijaKolaComponent', () => {
  let component: RezervacijaKolaComponent;
  let fixture: ComponentFixture<RezervacijaKolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaKolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaKolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
