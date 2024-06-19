package com.basic_crud.backend_crud.repository;

import com.basic_crud.backend_crud.entity.ForgetPassword;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ForgetPasswordRepository extends JpaRepository<ForgetPassword , Long> {
    boolean existsByUserEmailAndOtp(String userEmail, String otp);
    ForgetPassword findByUserEmail(String userEmail);
    ForgetPassword findByOtp(String otp);
}
