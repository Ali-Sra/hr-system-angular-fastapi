import { TestBed } from '@angular/core/testing';

import { Mitarbeiter } from './mitarbeiter';

describe('Mitarbeiter', () => {
  let service: Mitarbeiter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mitarbeiter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
