package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.dto.ForgetPasswordDto;
import com.basic_crud.backend_crud.dto.ForgetPasswordOtpVerifyDto;
import com.basic_crud.backend_crud.dto.PasswordToChangeDto;
import com.basic_crud.backend_crud.service.Forgetpassword.ForgetPasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class ForgetPasswordController {

    private final ForgetPasswordService forgetPasswordService;

    @Autowired
    ForgetPasswordController(ForgetPasswordService forgetPasswordService){
        this.forgetPasswordService=forgetPasswordService;
    }

    @PostMapping("/api/forgetpassword")
    public boolean emailSendForForgetPassword(@RequestBody ForgetPasswordDto forgetPasswordDto) {
        return this.forgetPasswordService.emailSendForForgetPassword(forgetPasswordDto);
    }

    @PostMapping("/api/otpforgetpassword")
    public boolean otpVerifyForForgetPassword(@RequestBody ForgetPasswordOtpVerifyDto forgetPasswordOtpVerifyDto) {
        return this.forgetPasswordService.otpVerifyForForgetPassword(forgetPasswordOtpVerifyDto);
    }

    @PostMapping("/api/upadatepassword")
    public boolean updatePasswordForForgetPassword(@RequestBody PasswordToChangeDto passwordToChangeDto) {
        return this.forgetPasswordService.updatePasswordForForgetPassword(passwordToChangeDto);
    }

}
