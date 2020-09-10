import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniFilijaluComponent } from './izmeni-filijalu.component';

describe('IzmeniFilijaluComponent', () => {
  let component: IzmeniFilijaluComponent;
  let fixture: ComponentFixture<IzmeniFilijaluComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IzmeniFilijaluComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IzmeniFilijaluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
