import { TestBed } from '@angular/core/testing';

import { FirestoredexService } from './firestoredex.service';

describe('FirestoredexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirestoredexService = TestBed.get(FirestoredexService);
    expect(service).toBeTruthy();
  });
});
