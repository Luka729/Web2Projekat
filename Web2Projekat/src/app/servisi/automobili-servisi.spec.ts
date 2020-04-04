import { TestBed } from '@angular/core/testing';

import { AutomobiliServisi } from './automobili-servisi';

describe('CarService', () => {
  let service: AutomobiliServisi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomobiliServisi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});