import { TestBed } from '@angular/core/testing';

import { PicsumServiceService } from './picsum-service.service';

describe('PicsumServiceService', () => {
  let service: PicsumServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicsumServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
