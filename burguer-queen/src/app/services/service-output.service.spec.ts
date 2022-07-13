import { TestBed } from '@angular/core/testing';

import { ServiceOutputService } from './service-output.service';

describe('ServiceOutputService', () => {
  let service: ServiceOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
