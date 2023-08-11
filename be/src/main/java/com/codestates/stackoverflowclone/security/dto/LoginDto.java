package com.codestates.stackoverflowclone.security.dto;

import lombok.Getter;

@Getter
public class LoginDto {
    //TODO valid 추가
    private String email;
    private String password;
}
