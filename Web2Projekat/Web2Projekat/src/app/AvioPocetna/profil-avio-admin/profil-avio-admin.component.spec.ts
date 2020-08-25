import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAvioAdminComponent } from './profil-avio-admin.component';

describe('ProfilAvioAdminComponent', () => {
  let component: ProfilAvioAdminComponent;
  let fixture: ComponentFixture<ProfilAvioAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilAvioAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAvioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
