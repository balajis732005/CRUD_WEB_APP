package com.basic_crud.backend_crud.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="forgetpassword")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ForgetPassword {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="useremail")
    private String userEmail;

    @Column(name="otp")
    private String otp;

    public ForgetPassword(String userEmail,String otp) {
        this.userEmail=userEmail;
        this.otp=otp;
    }

}
