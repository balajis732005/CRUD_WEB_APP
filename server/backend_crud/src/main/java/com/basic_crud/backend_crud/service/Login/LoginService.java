package com.basic_crud.backend_crud.service.Login;

import com.basic_crud.backend_crud.dto.LoginDto;
import com.basic_crud.backend_crud.entity.UserData;
import org.springframework.stereotype.Service;

@Service
public interface LoginService {

    UserData userLogin(LoginDto loginDto);

}
