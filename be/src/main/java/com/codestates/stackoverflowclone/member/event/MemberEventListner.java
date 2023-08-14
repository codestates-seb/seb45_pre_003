package com.codestates.stackoverflowclone.member.event;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
public class MemberEventListner {
    private final MemberService service;
    private final MemberRepository repository;

    @Autowired
    public MemberEventListner(MemberService service, MemberRepository repository) {
        this.service = service;
        this.repository = repository;
    }

    @EventListener
    public void caculateVisitCount(MemberEvent event) throws InterruptedException {
        Member member = service.verifyId(event.getMemberId());

        LocalDateTime lastLogin = member.getLastLoginTime();
        LocalDateTime now = LocalDateTime.now();

        if (lastLogin == null) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(1);
        }
        else if (now.compareTo(lastLogin) == 1) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(member.getContinuousVisitCount() + 1);
        }
        else if (now.compareTo(lastLogin) > 1) {
            member.setLastLoginTime(now);
            member.setVisitCount(member.getVisitCount() + 1);
            member.setContinuousVisitCount(1);
        }
        else member.setLastLoginTime(now);

        repository.save(member);
    }
}
