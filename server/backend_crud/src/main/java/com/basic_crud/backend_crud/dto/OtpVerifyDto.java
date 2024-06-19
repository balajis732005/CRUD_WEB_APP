package com.basic_crud.backend_crud.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class OtpVerifyDto {

    private String otp;

    private String userName;

    private String userEmail;

    private String password;

}
