import { TestBed } from '@angular/core/testing';

import { CdashboardService } from './cdashboard.service';

describe('CdashboardService', () => {
  let service: CdashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
