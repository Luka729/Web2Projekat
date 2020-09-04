import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajLetComponent } from './dodaj-let.component';

describe('DodajLetComponent', () => {
  let component: DodajLetComponent;
  let fixture: ComponentFixture<DodajLetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajLetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajLetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
