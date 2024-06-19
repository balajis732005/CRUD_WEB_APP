package com.basic_crud.backend_crud.service.Registration;

import com.basic_crud.backend_crud.dto.CheckDto;
import com.basic_crud.backend_crud.dto.RegistrationDto;
import org.springframework.stereotype.Service;

@Service
public interface RegistrationService {

    CheckDto userRegistration(RegistrationDto registrationDto);

}
