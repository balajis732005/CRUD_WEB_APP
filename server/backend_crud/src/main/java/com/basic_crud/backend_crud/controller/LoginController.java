package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.dto.LoginDto;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.service.Login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LoginController {

    private final LoginService loginService;

    @Autowired
    LoginController(LoginService loginService){
        this.loginService=loginService;
    }

    @PostMapping("/api/login")
    public UserData userLogin(@RequestBody LoginDto loginDto){
        return this.loginService.userLogin(loginDto);
    }

}
