package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.dto.CheckDto;
import com.basic_crud.backend_crud.dto.RegistrationDto;
import com.basic_crud.backend_crud.service.Registration.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class RegistrationController {

    private final RegistrationService registrationService;

    @Autowired
    RegistrationController(RegistrationService registrationService){
        this.registrationService=registrationService;
    }

    @PostMapping("/api/register")
    public CheckDto userRegistration(@RequestBody RegistrationDto registrationDto){
        return this.registrationService.userRegistration(registrationDto);
    }

}
