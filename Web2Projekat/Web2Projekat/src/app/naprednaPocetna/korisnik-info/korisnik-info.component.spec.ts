import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikInfoComponent } from './korisnik-info.component';

describe('KorisnikInfoComponent', () => {
  let component: KorisnikInfoComponent;
  let fixture: ComponentFixture<KorisnikInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
