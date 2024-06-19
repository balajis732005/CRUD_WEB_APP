package com.basic_crud.backend_crud.service.Delete;

import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeleteServiceImpl implements DeleteService {

    private final UserDataRepository userDataRepository;

    @Autowired
    DeleteServiceImpl(UserDataRepository userDataRepository){
        this.userDataRepository=userDataRepository;
    }

    @Override
    public boolean userDelete(Long id) {

        if(id!=null){
            userDataRepository.deleteById(id);
            return true;
        }
        return false;

    }
}
