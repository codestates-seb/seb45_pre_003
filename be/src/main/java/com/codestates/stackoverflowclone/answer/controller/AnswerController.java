package com.codestates.stackoverflowclone.answer.controller;

import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.dto.AnswerListDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.mapper.AnswerMapper;
import com.codestates.stackoverflowclone.answer.service.AnswerService;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.dto.QuestionListDto;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper,
                            MemberService memberService, QuestionService questionService) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    ///// Answer하나 생성해서 저장. 매핑된 question의 answerCount 1 증가
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody){
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String email = authentication.getName();

        Answer answer = answerMapper.answerPostToAnswer(requestBody,memberService,questionService);
        Answer postedAnswer = answerService.createAnswer(answer, email);
        AnswerDto.Response response = answerMapper.answerToAnswerResponse(postedAnswer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    ///// Answer하나 본문(body) 수정
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody){
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String email = authentication.getName();

        requestBody.setAnswerId(answerId);
        Answer answer = answerMapper.answerPatchToAnswer(requestBody);
        Answer findAnswer = answerService.updateAnswer(answer, email);
        AnswerDto.Response response = answerMapper.answerToAnswerResponse(findAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    ///// Todo:answer하나 골라서 best필드 지정. 해당 question은 answered 체크!
    @PatchMapping("/best/{answer-id}")
    public ResponseEntity setBest(@PathVariable("answer-id") @Positive long answerId,
                                  @RequestParam boolean isBest){
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String email = authentication.getName();

        answerService.setBest(answerId,isBest, email);
        return new ResponseEntity<>(HttpStatus.OK);
    }


    ///// 질문에 해당하는 답변들 리스트 리턴
    @GetMapping("/question/{question-id}")
    public ResponseEntity getAnswers( @PathVariable("question-id") @Positive long questionId ){
        List<Answer> answers = answerService.findAnswersByQuestion(questionId);
        List<AnswerDto.Response> responses = answerMapper.answersToAnswerResponses(answers);

        return new ResponseEntity<>(new AnswerListDto<>(responses), HttpStatus.OK);
    }



    ///// answer 하나 삭제. 매핑된 question의 answerCount 1 감소
    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){
        SecurityContext securityContext = SecurityContextHolder.getContext();
        Authentication authentication = securityContext.getAuthentication();
        String email = authentication.getName();

        answerService.deleteAnswer(answerId, email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
