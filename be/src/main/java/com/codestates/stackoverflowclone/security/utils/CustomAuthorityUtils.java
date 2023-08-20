package com.codestates.stackoverflowclone.security.utils;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomAuthorityUtils {
    @Getter
    private final List<String> USER_ROLES_STRING = List.of("USER");
    @Getter
    private final List<GrantedAuthority> USER_ROLES = List.of(new SimpleGrantedAuthority("ROLE_USER"));
}
