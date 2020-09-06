import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmenaPodatakaAKComponent } from './izmena-podataka-ak.component';

describe('IzmenaPodatakaAKComponent', () => {
  let component: IzmenaPodatakaAKComponent;
  let fixture: ComponentFixture<IzmenaPodatakaAKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmenaPodatakaAKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmenaPodatakaAKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
