import { TestBed } from '@angular/core/testing';

import { AccountverifyService } from './accountverify.service';

describe('AccountverifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountverifyService = TestBed.get(AccountverifyService);
    expect(service).toBeTruthy();
  });
});
