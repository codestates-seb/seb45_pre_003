package com.codestates.stackoverflowclone.member.controller;

import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final MemberService service;
    private final MemberMapper mapper;

    @Autowired
    public MemberController(MemberService service, MemberMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postMember(@RequestBody @Valid MemberDto.Post request) {
        Member member = mapper.postToMember(request);
        Member created = service.createMember(member);
        MemberDto.Response response = mapper.memberToResponse(created);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
}
