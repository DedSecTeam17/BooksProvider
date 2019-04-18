import { TestBed } from '@angular/core/testing';

import { BeforeLoggedInGuardService } from './before-logged-in-guard.service';

describe('BeforeLoggedInGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeforeLoggedInGuardService = TestBed.get(BeforeLoggedInGuardService);
    expect(service).toBeTruthy();
  });
});
