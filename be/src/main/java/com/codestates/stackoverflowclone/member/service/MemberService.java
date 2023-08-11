package com.codestates.stackoverflowclone.member.service;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.security.util.CustomAuthorityUtils;
import lombok.SneakyThrows;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

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
        verifyEmail(member.getEmail());

        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        List<String> roles = authorityUtils.createRoles();
        member.setPassword(encryptedPassword);
        member.setRoles(roles);

        Member savedMember = repository.save(member);

        return savedMember;
    }

    private void verifyEmail(String email) {
        Optional<Member> findedMember = repository.findByEmail(email);
        //TODO BusinessException구현 후 대체하기
        if (findedMember.isPresent()) throw new RuntimeException();
    }
}
