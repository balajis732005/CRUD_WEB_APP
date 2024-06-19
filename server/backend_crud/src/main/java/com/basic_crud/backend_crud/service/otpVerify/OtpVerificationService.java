package com.basic_crud.backend_crud.service.otpVerify;

import com.basic_crud.backend_crud.dto.OtpVerifyDto;
import org.springframework.stereotype.Service;

@Service
public interface OtpVerificationService {

    boolean userOtpVerification(OtpVerifyDto otpVerifyDto);

}
