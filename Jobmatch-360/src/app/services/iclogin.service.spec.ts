import { TestBed } from '@angular/core/testing';

import { IcloginService } from './iclogin.service';

describe('IcloginService', () => {
  let service: IcloginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IcloginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
