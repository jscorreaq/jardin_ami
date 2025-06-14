package com.jardin.ami_sas.dto;

import lombok.Data;

@Data
public class RegisterRequest {
    private String email;
    private String password;
    private String rol;
}
