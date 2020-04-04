import { TestBed } from '@angular/core/testing';

import { HoteliServisi } from './hoteli-servisi';

describe('CarService', () => {
  let service: HoteliServisi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoteliServisi);
  });

  it('should be created', () => {
    expect(new HoteliServisi()).toBeTruthy();
  });
});