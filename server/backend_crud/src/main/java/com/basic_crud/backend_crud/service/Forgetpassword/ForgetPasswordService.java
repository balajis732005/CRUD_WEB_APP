package com.basic_crud.backend_crud.service.Forgetpassword;

import com.basic_crud.backend_crud.dto.ForgetPasswordDto;
import com.basic_crud.backend_crud.dto.ForgetPasswordOtpVerifyDto;
import com.basic_crud.backend_crud.dto.OtpVerifyDto;
import com.basic_crud.backend_crud.dto.PasswordToChangeDto;
import org.springframework.stereotype.Service;

@Service
public interface ForgetPasswordService {

    boolean emailSendForForgetPassword(ForgetPasswordDto forgetPasswordDto);

    boolean otpVerifyForForgetPassword(ForgetPasswordOtpVerifyDto forgetPasswordOtpVerifyDto);

    boolean updatePasswordForForgetPassword(PasswordToChangeDto passwordToChangeDto);

}
