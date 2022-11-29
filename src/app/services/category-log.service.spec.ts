import { TestBed } from '@angular/core/testing';

import { CategoryLogService } from './category-log.service';

describe('CategoryLogService', () => {
  let service: CategoryLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
