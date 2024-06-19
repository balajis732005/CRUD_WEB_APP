package com.basic_crud.backend_crud.service.Update;

import com.basic_crud.backend_crud.dto.UpdateDto;
import com.basic_crud.backend_crud.entity.UserData;
import org.springframework.stereotype.Service;

@Service
public interface UpdateService {

    UserData userUpdate(UpdateDto updateDto);

}
