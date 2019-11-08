import { TestBed } from '@angular/core/testing';

import { GotodemoService } from './gotodemo.service';

describe('GotodemoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GotodemoService = TestBed.get(GotodemoService);
    expect(service).toBeTruthy();
  });
});
