package com.basic_crud.backend_crud.service.Login;

import com.basic_crud.backend_crud.dto.LoginDto;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl implements LoginService {

    private final UserDataRepository userDataRepository;

    @Autowired
    LoginServiceImpl(UserDataRepository userDataRepository){
        this.userDataRepository=userDataRepository;
    }

    @Override
    public UserData userLogin(LoginDto loginDto) {
        if(loginDto!=null){
            if(userDataRepository.existsByUserEmailAndPassword(loginDto.getUserEmail(), loginDto.getPassword())){
                return userDataRepository.findByUserEmailAndPassword(loginDto.getUserEmail(), loginDto.getPassword());
            }
        }
        return null;
    }
}
