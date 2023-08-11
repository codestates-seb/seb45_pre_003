package com.codestates.stackoverflowclone.member.service;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.security.util.CustomAuthorityUtils;
import lombok.SneakyThrows;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
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
    private final int PAGESIZE = 36;

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

        Member saveMember = repository.save(member);

        return saveMember;
    }

    private void verifyEmail(String email) {
        Optional<Member> findMember = repository.findByEmail(email);
        //TODO BusinessException구현 후 대체하기
        if (findMember.isPresent()) throw new RuntimeException();
    }

    public Member findMember(long memberId) {
        Member member = verifyId(memberId);

        return member;
    }

    private Member verifyId(long memberId) {
        Optional<Member> optionalMember = repository.findById(memberId);
        //TODO BusinessException 구현 후 대체
        Member findMember = optionalMember.orElseThrow(() -> new RuntimeException());

        return findMember;
    }

    public Page<Member> findMembers(String tab, String filter, int page) {
        Pageable pageable = PageRequest.of(page, PAGESIZE, Sort.by(tab).descending());
    }

}
