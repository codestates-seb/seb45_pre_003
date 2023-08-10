package com.codestates.stackoverflowclone.member.service;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository repository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public Member createMember(Member member) {
    }
}
