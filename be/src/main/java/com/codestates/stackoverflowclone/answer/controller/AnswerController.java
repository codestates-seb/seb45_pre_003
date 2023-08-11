package com.codestates.stackoverflowclone.answer.controller;

import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.mapper.AnswerMapper;
import com.codestates.stackoverflowclone.answer.service.AnswerService;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@Validated
public class AnswerController {
    private AnswerService answerService;
    private AnswerMapper answerMapper;
    private MemberService memberService;
    private QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper answerMapper,
                            MemberService memberService, QuestionService questionService) {
        this.answerService = answerService;
        this.answerMapper = answerMapper;
        this.memberService = memberService;
        this.questionService = questionService;
    }
    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post requestBody){
        Answer answer = answerMapper.answerPostToAnswer(requestBody,memberService,questionService);
        Answer postedAnswer = answerService.createAnswer(answer);
        AnswerDto.Response response = answerMapper.answerToAnswerResponse(postedAnswer);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody){
        requestBody.setAnswerId(answerId);
        Answer answer = answerMapper.answerPatchToAnswer(requestBody);
        Answer findAnswer = answerService.updateAnswer(answer);
        AnswerDto.Response response = answerMapper.answerToAnswerResponse(findAnswer);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }




    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId){
        answerService.deleteAnswer(answerId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
