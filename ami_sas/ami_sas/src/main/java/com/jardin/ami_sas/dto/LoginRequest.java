package com.jardin.ami_sas.dto;

import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
