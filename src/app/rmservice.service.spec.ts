import { TestBed } from '@angular/core/testing';

import { RmserviceService } from './rmservice.service';

describe('RmserviceService', () => {
  let service: RmserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
