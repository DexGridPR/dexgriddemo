import { TestBed } from '@angular/core/testing';

import { SubmitfireService } from './submitfire.service';

describe('SubmitfireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitfireService = TestBed.get(SubmitfireService);
    expect(service).toBeTruthy();
  });
});
