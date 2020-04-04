import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadajuciMenijiComponent } from './padajuci-meniji.component';

describe('PadajuciMenijiComponent', () => {
  let component: PadajuciMenijiComponent;
  let fixture: ComponentFixture<PadajuciMenijiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadajuciMenijiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadajuciMenijiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
