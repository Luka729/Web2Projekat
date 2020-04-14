import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioComponent } from './avio.component';

describe('AvioComponent', () => {
  let component: AvioComponent;
  let fixture: ComponentFixture<AvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
