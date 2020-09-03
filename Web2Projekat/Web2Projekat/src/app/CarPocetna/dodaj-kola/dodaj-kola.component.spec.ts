import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKolaComponent } from './dodaj-kola.component';

describe('DodajKolaComponent', () => {
  let component: DodajKolaComponent;
  let fixture: ComponentFixture<DodajKolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajKolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajKolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
