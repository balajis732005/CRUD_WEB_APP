import { TestBed } from '@angular/core/testing';

import { NewpasswordchangeService } from './newpasswordchange.service';

describe('NewpasswordchangeService', () => {
  let service: NewpasswordchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpasswordchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
