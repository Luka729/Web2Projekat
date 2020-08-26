import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrovanjeAvioComponent } from './registrovanje-avio.component';

describe('RegistrovanjeAvioComponent', () => {
  let component: RegistrovanjeAvioComponent;
  let fixture: ComponentFixture<RegistrovanjeAvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrovanjeAvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrovanjeAvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
