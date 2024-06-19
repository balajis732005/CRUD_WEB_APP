package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.dto.UpdateDto;
import com.basic_crud.backend_crud.entity.UserData;
import com.basic_crud.backend_crud.service.Update.UpdateService;
import org.hibernate.persister.entity.mutation.UpdateCoordinator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UpdateController {

    private final UpdateService updateService;

    @Autowired
    UpdateController(UpdateService updateService){
        this.updateService=updateService;
    }

    @PutMapping("/api/update")
    public UserData userUpdate(@RequestBody UpdateDto updateDto){
        return this.updateService.userUpdate(updateDto);
    }

}
