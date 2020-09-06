import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaPodatakaORACComponent } from './izmena-podataka-orac.component';

describe('IzmenaPodatakaORACComponent', () => {
  let component: IzmenaPodatakaORACComponent;
  let fixture: ComponentFixture<IzmenaPodatakaORACComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaPodatakaORACComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaPodatakaORACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
