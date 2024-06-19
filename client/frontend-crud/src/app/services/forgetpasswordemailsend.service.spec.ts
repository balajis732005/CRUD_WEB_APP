import { TestBed } from '@angular/core/testing';

import { ForgetpasswordemailsendService } from './forgetpasswordemailsend.service';

describe('ForgetpasswordemailsendService', () => {
  let service: ForgetpasswordemailsendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetpasswordemailsendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
