package com.codestates.stackoverflowclone.question.controller;

import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.mapper.QuestionMapper;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questions")
@Validated
public class QuestionController {
    private QuestionMapper questionMapper;
    private QuestionService questionService;
    private MemberService memberService;

    public QuestionController(QuestionMapper questionMapper, QuestionService questionService,
                              MemberService memberService) {
        this.questionMapper = questionMapper;
        this.questionService = questionService;
        this.memberService = memberService;
    }

    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody){
        // mapper, Service, Repository 거쳐서 저장하고 저장해온거 반납
        Question question = questionMapper.questionPostToQuestion(requestBody, memberService);
        Question savedQuestion = questionService.createQuestion(question);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(savedQuestion);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch requestBody){
        // mapper, service, repository 거쳐서 수정하고 반납
        requestBody.setQuestionId(questionId);
        Question question = questionMapper.questionPatchToQuestion(requestBody);
        Question findQuestion = questionService.updateQuestion(question);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(findQuestion);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }






    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
        questionService.deleteQuestion( questionId );
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
