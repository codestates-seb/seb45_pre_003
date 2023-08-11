package com.codestates.stackoverflowclone.member.repository;

import com.codestates.stackoverflowclone.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PageRepository extends PagingAndSortingRepository<Member, Long> {
    Page<Member> findBy(Pageable pageable);
}
