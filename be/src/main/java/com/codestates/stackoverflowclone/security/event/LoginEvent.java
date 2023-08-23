package com.codestates.stackoverflowclone.security.event;


import lombok.Getter;

@Getter
public class LoginEvent {
    private String email;

    public LoginEvent (String email) {
        this.email = email;
    }
}
