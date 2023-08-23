package com.codestates.stackoverflowclone.security.event;

import com.codestates.stackoverflowclone.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.exception.ExceptionCode;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Optional;

@Component
public class LoginEventListener {
    private final MemberService service;
    private final MemberRepository repository;

    @Autowired
    public LoginEventListener(MemberService service, MemberRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @EventListener
    public void calculateVisitCount(LoginEvent event) throws InterruptedException {
        String email = event.getEmail();

        Optional<Member> optionalMember = repository.findByEmail(email);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        LocalDateTime lastLoginTime = member.getLastLoginTime();
        LocalDateTime now = LocalDateTime.now();

        if (lastLoginTime == null) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(1);
        }
        else if (now.compareTo(lastLoginTime) > 1) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(1);
        }
        else if (now.getDayOfMonth() - lastLoginTime.getDayOfMonth() > 1) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(1);
        }
        else if (now.getDayOfMonth() - lastLoginTime.getDayOfMonth() == 1) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(member.getContinuousVisitCount() + 1);
        }
        else member.setLastLoginTime(now);

        repository.save(member);
    }
}
