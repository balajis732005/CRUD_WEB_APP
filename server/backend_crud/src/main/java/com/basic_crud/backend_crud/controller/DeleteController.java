package com.basic_crud.backend_crud.controller;

import com.basic_crud.backend_crud.service.Delete.DeleteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DeleteController {

    private final DeleteService deleteService;

    @Autowired
    DeleteController(DeleteService deleteService){
        this.deleteService=deleteService;
    }

    @DeleteMapping("/api/delete/{id}")
    public boolean userDelete(@PathVariable Long id){
        return this.deleteService.userDelete(id);
    }

}
