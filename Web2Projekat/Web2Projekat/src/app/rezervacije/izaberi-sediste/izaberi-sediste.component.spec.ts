import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzaberiSedisteComponent } from './izaberi-sediste.component';

describe('IzaberiSedisteComponent', () => {
  let component: IzaberiSedisteComponent;
  let fixture: ComponentFixture<IzaberiSedisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzaberiSedisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzaberiSedisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
