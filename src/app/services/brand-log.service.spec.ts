import { TestBed } from '@angular/core/testing';

import { BrandLogService } from './brand-log.service';

describe('BrandLogService', () => {
  let service: BrandLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
