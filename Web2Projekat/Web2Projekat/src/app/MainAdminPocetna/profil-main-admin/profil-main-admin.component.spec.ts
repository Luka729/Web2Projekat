import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilMainAdminComponent } from './profil-main-admin.component';

describe('ProfilMainAdminComponent', () => {
  let component: ProfilMainAdminComponent;
  let fixture: ComponentFixture<ProfilMainAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilMainAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilMainAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
