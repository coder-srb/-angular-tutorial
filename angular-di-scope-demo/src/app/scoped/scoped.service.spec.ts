import { TestBed } from '@angular/core/testing';

import { ScopedService } from './scoped.service';

describe('ScopedService', () => {
  let service: ScopedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScopedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
