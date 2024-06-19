package com.basic_crud.backend_crud.service.Update;

import com.basic_crud.backend_crud.dto.UpdateDto;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.repository.UserDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpdateServiceImpl implements UpdateService {

    private final UserDataRepository userDataRepository;

    @Autowired
    UpdateServiceImpl(UserDataRepository userDataRepository){
        this.userDataRepository=userDataRepository;
    }

    @Override
    public UserData userUpdate(UpdateDto updateDto) {
        if(updateDto!=null){
            UserData update = new UserData(updateDto.getId(), updateDto.getUserName(), updateDto.getUserEmail(), updateDto.getPassword());
            userDataRepository.save(update);
            return update;
        }
        return null;
    }

}
