package com.basic_crud.backend_crud.service.otpVerify;

import com.basic_crud.backend_crud.dto.OtpVerifyDto;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.repository.OtpVerificationRepository;
import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class OtpVerificationServiceImpl implements OtpVerificationService {

    private final OtpVerificationRepository otpVerificationRepository;
    private final UserDataRepository userDataRepository;

    @Autowired
    public OtpVerificationServiceImpl(OtpVerificationRepository otpVerificationRepository
    ,UserDataRepository userDataRepository) {
        this.otpVerificationRepository = otpVerificationRepository;
        this.userDataRepository=userDataRepository;
    }

    @Override
    public boolean userOtpVerification(OtpVerifyDto otpVerifyDto) {
        if(otpVerificationRepository.findByOtp(otpVerifyDto.getOtp())==null){
            return false;
        }
        if(Objects.equals(otpVerifyDto.getUserEmail(), otpVerificationRepository.findByOtp(otpVerifyDto.getOtp()).getUserEmail())){

            UserData user = new UserData(otpVerifyDto.getUserName(),otpVerifyDto.getUserEmail(),otpVerifyDto.getPassword());

            userDataRepository.save(user);
            return true;
        }
        return false;
    }
}
