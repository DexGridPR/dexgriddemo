import { TestBed } from '@angular/core/testing';

import { RecService } from './rec.service';

describe('RecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecService = TestBed.get(RecService);
    expect(service).toBeTruthy();
  });
});
