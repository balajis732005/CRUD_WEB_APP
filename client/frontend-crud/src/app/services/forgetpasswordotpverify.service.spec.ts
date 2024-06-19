import { TestBed } from '@angular/core/testing';

import { ForgetpasswordotpverifyService } from './forgetpasswordotpverify.service';

describe('ForgetpasswordotpverifyService', () => {
  let service: ForgetpasswordotpverifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetpasswordotpverifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
