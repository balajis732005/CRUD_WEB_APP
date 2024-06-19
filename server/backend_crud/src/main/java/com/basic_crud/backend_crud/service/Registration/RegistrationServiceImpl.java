package com.basic_crud.backend_crud.service.Registration;
import com.basic_crud.backend_crud.dto.CheckDto;
import com.basic_crud.backend_crud.dto.RegistrationDto;
import com.basic_crud.backend_crud.entity.OtpVerification;
import com.basic_crud.backend_crud.repository.OtpVerificationRepository;
import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import java.util.Random;

@Service
public class RegistrationServiceImpl implements RegistrationService {

    private final JavaMailSender javaMailSender;
    private final OtpVerificationRepository otpVerificationRepository;
    private final UserDataRepository userDataRepository;

    @Autowired
    RegistrationServiceImpl(JavaMailSender javaMailSender,
                            OtpVerificationRepository otpVerificationRepository, UserDataRepository userDataRepository){
        this.javaMailSender=javaMailSender;
        this.otpVerificationRepository=otpVerificationRepository;
        this.userDataRepository = userDataRepository;
    }

    private String generateOtp(){
        return String.valueOf(new Random().nextInt(999999));
    }

    @Override
    public CheckDto userRegistration(RegistrationDto registrationDto) {

        if(registrationDto!=null){
            if(userDataRepository.existsByUserEmail(registrationDto.getUserEmail())){
                System.out.println(registrationDto);
                CheckDto checkDto = new CheckDto();
                checkDto.setApiSuccess(false);
                return checkDto;
            }
            String generatedOtp = generateOtp();
            OtpVerification otpObj = new OtpVerification(registrationDto.getUserEmail(),generatedOtp);
            otpVerificationRepository.save(otpObj);
            SimpleMailMessage message=new SimpleMailMessage();
            message.setTo(registrationDto.getUserEmail());
            message.setSubject("OTP VERIFICATION");
            message.setText("Here is Your OTP : "+generatedOtp);
            javaMailSender.send(message);
            CheckDto checkDto = new CheckDto();
            checkDto.setApiSuccess(true);
            return checkDto;
        }
        CheckDto checkDto = new CheckDto();
        checkDto.setApiSuccess(false);
        return checkDto;
    }

}
