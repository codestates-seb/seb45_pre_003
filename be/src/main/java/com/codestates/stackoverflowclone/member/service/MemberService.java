package com.codestates.stackoverflowclone.member.service;

import com.codestates.stackoverflowclone.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.exception.ExceptionCode;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.repository.PageRepository;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import com.codestates.stackoverflowclone.security.utils.CustomAuthorityUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
    private final PageRepository pageRepository;
    private final QuestionRepository questionRepository;
    private final CustomAuthorityUtils customAuthorityUtils;
    private final int PAGE_SIZE = 36;
    private final int QUESTION_PAGE_SIZE = 3;
    private final int QUESTION_PAGE_NUMBER = 0;

    public MemberService(MemberRepository repository, PasswordEncoder passwordEncoder, PageRepository pageRepository, QuestionRepository questionRepository, CustomAuthorityUtils customAuthorityUtils) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.pageRepository = pageRepository;
        this.questionRepository = questionRepository;
        this.customAuthorityUtils = customAuthorityUtils;
    }

    public Member createMember(Member member) {
        verifyEmail(member.getEmail());

        if (member.getRegistrationType() != Member.RegistrationType.OAUTH2) {
            member.setPassword(passwordEncoder.encode(member.getPassword()));
        }

        List<String> roles = customAuthorityUtils.getUSER_ROLES_STRING();
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
        Pageable pageable = PageRequest.of(page, PAGE_SIZE, Sort.by("createdAt").descending());
        Page<Member> memberPage = pageRepository.findBy(pageable);

        return memberPage;
    }

    public Member updateMember(Member member, String email) {
        Member findMember = verifyId(member.getId());

        if (!email.equals(findMember.getEmail())) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        Optional.ofNullable(member.getName()).ifPresent(
                name -> findMember.setName(name)
        );
        Optional.ofNullable(member.getPassword()).ifPresent(
                password -> findMember.setPassword(passwordEncoder.encode(password))
        );

        Member updateMember = repository.save(findMember);

        return updateMember;
    }

    public void deleteMember(long memberId, String email) {
        Member findMember = verifyId(memberId);

        if (!email.equals(findMember.getEmail())) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        repository.delete(findMember);
    }

    public Page<Question> getQuestionByMemberId(long memberId) {
        Pageable pageable = PageRequest.of(QUESTION_PAGE_NUMBER, QUESTION_PAGE_SIZE, Sort.by("createdAt").descending());
        Page<Question> questions = questionRepository.findQuestionsByMemberId(memberId, pageable);

        return questions;
    }

    public Page<Question> getQuestionWithMyAnswerByMemberId(long memberId) {
        Pageable pageable = PageRequest.of(QUESTION_PAGE_NUMBER, QUESTION_PAGE_SIZE, Sort.by("createdAt").descending());
        Page<Question> questions = questionRepository.findQuestionsWithMyAnswer(memberId, pageable);

        return questions;
    }
}
