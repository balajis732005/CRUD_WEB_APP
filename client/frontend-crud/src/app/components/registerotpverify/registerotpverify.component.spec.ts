import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOtpVerifyComponent } from './registerotpverify.component';

describe('RegisterOtpVerifyComponent', () => {
  let component: RegisterOtpVerifyComponent;
  let fixture: ComponentFixture<RegisterOtpVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterOtpVerifyComponent]
    });
    fixture = TestBed.createComponent(RegisterOtpVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
