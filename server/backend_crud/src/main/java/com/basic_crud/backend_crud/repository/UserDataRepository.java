package com.basic_crud.backend_crud.repository;

import com.basic_crud.backend_crud.entity.UserData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDataRepository extends JpaRepository<UserData, Long> {

    boolean existsByUserEmailAndPassword(String userEmail,String password);

    UserData findByUserEmailAndPassword(String userEmail,String password);

    boolean existsByUserEmail(String userEmail);

    UserData findByUserEmail(String userEmail);

}
