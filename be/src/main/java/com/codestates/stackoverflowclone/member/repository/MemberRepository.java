package com.codestates.stackoverflowclone.member.repository;

import com.codestates.stackoverflowclone.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
