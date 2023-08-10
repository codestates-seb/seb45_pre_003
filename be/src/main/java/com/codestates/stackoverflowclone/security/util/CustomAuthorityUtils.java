package com.codestates.stackoverflowclone.security.util;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class CustomAuthorityUtils {
    //TODO 현재는 그냥 다 USER로 고정
    //상의 후 admin 조건 정하고 마저 구현하기
    private final List<String> USER_ROLES_STRING = List.of("USER");
    private final List<GrantedAuthority> USER_ROLES = AuthorityUtils.createAuthorityList("ROLE_USER");

    public List<GrantedAuthority> createAuthorities() {
        return USER_ROLES;
    }

    public List<String> createRoles() {
        return USER_ROLES_STRING;
    }
}
