import { TestBed } from '@angular/core/testing';

import { RegisterotpverifyService } from './registerotpverify.service';

describe('RegisterotpverifyService', () => {
  let service: RegisterotpverifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterotpverifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
