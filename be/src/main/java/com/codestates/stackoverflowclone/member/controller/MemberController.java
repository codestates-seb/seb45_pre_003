package com.codestates.stackoverflowclone.member.controller;

import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.mapper.QuestionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {
    private final MemberService service;
    private final MemberMapper mapper;
    private final QuestionMapper questionMapper;

    @Autowired
    public MemberController(MemberService service, MemberMapper mapper, QuestionMapper questionMapper) {
        this.service = service;
        this.mapper = mapper;
        this.questionMapper = questionMapper;
    }

    @PostMapping
    public ResponseEntity postMember(@RequestBody @Valid MemberDto.Post request) {
        Member member = mapper.postToMember(request);
        Member created = service.createMember(member);
        MemberDto.Response response = mapper.memberToResponse(created);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId) {
        Member findMember = service.findMember(memberId);
        MemberDto.GetMemberResponse response = mapper.memberToGetMemberResponse(findMember);

        Page<Question> questions = service.getQuestionByMemberId(memberId);
        Page<Question> questionsWithMyAnswers = service.getQuestionWithMyAnswerByMemberId(memberId);

        response.setQuestionsData(
                MemberDto.QuestionsResponse.builder()
                        .data(questionMapper.questionsToQuestionMypageElements(questions.getContent()))
                        .pageInfo(MemberDto.PageInfo.builder()
                                .page(1)
                                .totalElements(questions.getTotalElements())
                                .totalPage(questions.getTotalPages())
                                .build())
                        .build());
        response.setQuestionsWithMyAnswers(
                MemberDto.QuestionsResponse.builder()
                        .data(questionMapper.questionsToQuestionMypageElements(questionsWithMyAnswers.getContent()))
                        .pageInfo(MemberDto.PageInfo.builder()
                                .page(1)
                                .totalElements(questionsWithMyAnswers.getTotalElements())
                                .totalPage(questionsWithMyAnswers.getTotalPages())
                                .build())
                        .build());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(//@RequestParam String tab, @RequestParam String filter,
                                     @RequestParam @Positive int page) {
        Page<Member> memberPage = service.findMembers(page - 1);
        List<Member> list = memberPage.getContent();
        List<MemberDto.Response> responseList = mapper.memberListToresponseList(list);

        MemberDto.PageInfo pageInfo = MemberDto.PageInfo.builder()
                .page(page)
                .totalPage(memberPage.getTotalPages())
                .totalElements(memberPage.getTotalElements())
                .build();

        MemberDto.PageResponse response = MemberDto.PageResponse.builder()
                .data(responseList)
                .pageInfo(pageInfo)
                .build();

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") long memberId, @RequestBody MemberDto.Patch request) {
        Member member = mapper.patchToMember(request);
        member.setId(memberId);

        Member updateMember = service.updateMember(member);
        MemberDto.Response response = mapper.memberToResponse(updateMember);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId) {
        service.deleteMember(memberId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
