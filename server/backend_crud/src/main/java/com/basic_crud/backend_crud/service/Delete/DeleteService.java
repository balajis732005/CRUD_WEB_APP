package com.basic_crud.backend_crud.service.Delete;

import org.springframework.stereotype.Service;

@Service
public interface DeleteService {

    boolean userDelete(Long id);

}
