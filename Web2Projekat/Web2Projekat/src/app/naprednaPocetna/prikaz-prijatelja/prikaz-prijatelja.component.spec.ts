import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazPrijateljaComponent } from './prikaz-prijatelja.component';

describe('PrikazPrijateljaComponent', () => {
  let component: PrikazPrijateljaComponent;
  let fixture: ComponentFixture<PrikazPrijateljaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazPrijateljaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazPrijateljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
