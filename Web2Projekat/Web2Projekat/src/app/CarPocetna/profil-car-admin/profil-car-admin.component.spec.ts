import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilCarAdminComponent } from './profil-car-admin.component';

describe('ProfilCarAdminComponent', () => {
  let component: ProfilCarAdminComponent;
  let fixture: ComponentFixture<ProfilCarAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilCarAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilCarAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
