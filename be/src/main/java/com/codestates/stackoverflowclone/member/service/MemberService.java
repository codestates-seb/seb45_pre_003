package com.codestates.stackoverflowclone.member.service;

import com.codestates.stackoverflowclone.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.exception.ExceptionCode;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.repository.PageRepository;
import com.codestates.stackoverflowclone.security.util.CustomAuthorityUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final PageRepository pageRepository;
    private final int PAGESIZE = 36;

    public MemberService(MemberRepository repository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils, PageRepository pageRepository) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
        this.pageRepository = pageRepository;
    }

    public Member createMember(Member member) {
        verifyEmail(member.getEmail());

        if (!member.getPassword().isEmpty()) {
            String encryptedPassword = passwordEncoder.encode(member.getPassword());
            member.setPassword(encryptedPassword);
        }
        List<String> roles = authorityUtils.createRoles();
        member.setRoles(roles);

        Member saveMember = repository.save(member);

        return saveMember;
    }

    private void verifyEmail(String email) {
        Optional<Member> findMember = repository.findByEmail(email);
        if (findMember.isPresent()) throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    public Member findMember(long memberId) {
        Member member = verifyId(memberId);

        return member;
    }

    public Member verifyId(long memberId) {
        Optional<Member> optionalMember = repository.findById(memberId);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    public Page<Member> findMembers(int page) {
        //일단은 최신순 정렬
        //추후 tab, filter에 따라 분기해서 처리할 예정
        Pageable pageable = PageRequest.of(page, PAGESIZE, Sort.by("createdAt").descending());
        Page<Member> memberPage = pageRepository.findBy(pageable);

        return memberPage;
    }

    public Member updateMember(Member member) {
        Member findMember = verifyId(member.getId());

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null && authentication.isAuthenticated()) {
            String email = authentication.getName();
            if (email.equals(member.getEmail())) {
                Optional.ofNullable(member.getName()).ifPresent(name -> findMember.setName(name));
                Optional.ofNullable(member.getPassword())
                        .ifPresent(password -> findMember.setPassword(passwordEncoder.encode(password)));

                Member updateMember = repository.save(findMember);

                return updateMember;
            }
        }
        throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
    }

    public void deleteMember(long memberId) {
        Member findMember = verifyId(memberId);

        repository.delete(findMember);
    }

}
