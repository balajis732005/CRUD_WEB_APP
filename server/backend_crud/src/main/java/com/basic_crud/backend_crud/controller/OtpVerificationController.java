package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.dto.OtpVerifyDto;
import com.basic_crud.backend_crud.service.otpVerify.OtpVerificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class OtpVerificationController {

    private final OtpVerificationService otpVerificationService;

    @Autowired
    public OtpVerificationController(OtpVerificationService otpVerificationService) {
        this.otpVerificationService = otpVerificationService;
    }

    @PostMapping("/api/otpverify")
    public boolean userOtpVerification(@RequestBody OtpVerifyDto otpVerifyDto) {
        return otpVerificationService.userOtpVerification(otpVerifyDto);
    }

}
