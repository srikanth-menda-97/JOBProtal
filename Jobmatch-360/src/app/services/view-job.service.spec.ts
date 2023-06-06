import { TestBed } from '@angular/core/testing';

import { ViewJobService } from './view-job.service';

describe('ViewJobService', () => {
  let service: ViewJobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewJobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
