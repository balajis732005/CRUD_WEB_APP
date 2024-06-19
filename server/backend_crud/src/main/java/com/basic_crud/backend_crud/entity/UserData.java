package com.basic_crud.backend_crud.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="student")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class UserData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="student_id")
    private Long id;

    @Column(name="username")
    private String userName;

    @Column(name="useremail")
    private String userEmail;

    @Column(name="password")
    private String password;

    public UserData(String userName, String userEmail, String password) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.password = password;
    }

}
