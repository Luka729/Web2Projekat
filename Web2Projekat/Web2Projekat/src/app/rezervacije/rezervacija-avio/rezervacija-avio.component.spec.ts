import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervacijaAvioComponent } from './rezervacija-avio.component';

describe('RezervacijaAvioComponent', () => {
  let component: RezervacijaAvioComponent;
  let fixture: ComponentFixture<RezervacijaAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervacijaAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervacijaAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
