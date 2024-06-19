package com.basic_crud.backend_crud.service.Forgetpassword;

import com.basic_crud.backend_crud.dto.ForgetPasswordDto;
import com.basic_crud.backend_crud.dto.ForgetPasswordOtpVerifyDto;

import com.basic_crud.backend_crud.dto.PasswordToChangeDto;
import com.basic_crud.backend_crud.entity.ForgetPassword;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.repository.ForgetPasswordRepository;
import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Random;

@Service
public class ForgetPasswordServiceImpl implements ForgetPasswordService {

    private final ForgetPasswordRepository forgetPasswordRepository;
    private final JavaMailSender javaMailSender;
    private final UserDataRepository userDataRepository;

    @Autowired
    ForgetPasswordServiceImpl(ForgetPasswordRepository forgetPasswordRepository
                                ,JavaMailSender javaMailSender
                                ,UserDataRepository userDataRepository) {
        this.forgetPasswordRepository=forgetPasswordRepository;
        this.javaMailSender=javaMailSender;
        this.userDataRepository=userDataRepository;
    }

    private String generateOtp(){
        return String.valueOf(new Random().nextInt(999999));
    }

    @Override
    public boolean emailSendForForgetPassword(ForgetPasswordDto forgetPasswordDto) {
        if(forgetPasswordDto!=null){
            if(!userDataRepository.existsByUserEmail(forgetPasswordDto.getUserEmail())){
                return false;
            }
            String generatedOtp = generateOtp();
            ForgetPassword forget = new ForgetPassword(forgetPasswordDto.getUserEmail(), generatedOtp);
            forgetPasswordRepository.save(forget);

            SimpleMailMessage message=new SimpleMailMessage();
            message.setTo(forgetPasswordDto.getUserEmail());
            message.setSubject("OTP VERIFICATION FOR FORGET PASSWORD");
            message.setText("Here is Your OTP : "+generatedOtp);
            javaMailSender.send(message);
            return true;
        }
        return false;
    }

    @Override
    public boolean otpVerifyForForgetPassword(ForgetPasswordOtpVerifyDto forgetPasswordOtpVerifyDto) {
        if(forgetPasswordRepository.findByOtp(forgetPasswordOtpVerifyDto.getOtp())==null){
            return false;
        }
        return Objects.equals(forgetPasswordOtpVerifyDto.getUserEmail(), forgetPasswordRepository.findByOtp(forgetPasswordOtpVerifyDto.getOtp()).getUserEmail());
    }

    @Override
    public boolean updatePasswordForForgetPassword(PasswordToChangeDto passwordToChangeDto) {
        if(passwordToChangeDto !=null){
            UserData dataForPassword = userDataRepository.findByUserEmail(passwordToChangeDto.getUserEmail());
            dataForPassword.setPassword(passwordToChangeDto.getNewPassword());
            userDataRepository.save(dataForPassword);
            return true;
        }
        return false;
    }

}
