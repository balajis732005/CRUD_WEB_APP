package com.basic_crud.backend_crud.repository;

import com.basic_crud.backend_crud.entity.OtpVerification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OtpVerificationRepository extends JpaRepository<OtpVerification, Long> {
    boolean existsByUserEmailAndOtp(String userEmail, String otp);
    OtpVerification findByUserEmail(String userEmail);
    OtpVerification findByOtp(String otp);
}
