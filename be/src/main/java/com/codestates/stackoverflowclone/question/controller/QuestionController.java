package com.codestates.stackoverflowclone.question.controller;

import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.dto.QuestionListDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.mapper.QuestionMapper;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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

    ///// 질문 등록!
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionDto.Post requestBody){
        // mapper, Service, Repository 거쳐서 저장하고 저장해온거 반납
        Question question = questionMapper.questionPostToQuestion(requestBody, memberService);
        Question savedQuestion = questionService.createQuestion(question);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(savedQuestion);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    ///// 질문 수정
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
    ///// 질문 하나 상세하게 뜯어오기(읽기)
    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
        Question question = questionService.readQuestion(questionId);
        QuestionDto.Response response = questionMapper.questionToQuestionResponse(question);

        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    ///// week 질문들 리스트 조회수순으로 뜯어와 보내기
    @GetMapping("/week")
    public ResponseEntity getQuestionsThisWeek(@RequestParam String searchWord,
                                               @Positive @RequestParam int page,
                                               @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findQuestionsThisWeek(searchWord,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionResponseElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }
    ///// month 질문들 리스트 조회수순으로 뜯어와 보내기
    @GetMapping("/month")
    public ResponseEntity getQuestionsThisMonth(@RequestParam String searchWord,
                                                @Positive @RequestParam int page,
                                                @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findQuestionsThisMonth(searchWord,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionResponseElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }
    ///// 질문들 리스트 최신순으로 뜯어와 보내기
    @GetMapping
    public ResponseEntity getNewestQuestions(@RequestParam String searchWord,
                                             @Positive @RequestParam int page,
                                             @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findQuestions(searchWord,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionResponseElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    ///// unanswered question list! 정렬기준(최신순)
    @GetMapping("/unanswered")
    public ResponseEntity getUnansweredQuestions(@RequestParam String searchWord,
                                                 @Positive @RequestParam int page,
                                                 @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findUnansweredQuestions(searchWord,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionResponseElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }


    ///// memberId를 통해 member가 작성한 answer들의 questions들 제목/생성시간 리스트 mypage로 가져오기
    @GetMapping("/withmyanswer/{member-id}")
    public ResponseEntity getQuestionsWithMyAnswer(@PathVariable("member-id") long memberId,
                                                   @Positive @RequestParam int page,
                                                   @Positive @RequestParam int size){
        Page<Question> pageQuestions = questionService.findQuestionsWithMyAnswer(memberId,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionMypageElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    ///// memberId를 통해 questions들 제목/생성시간 리스트 가져오기
    @GetMapping("/onmypage/{member-id}")
    public ResponseEntity getMyQuestions(@PathVariable("member-id") long memberId,
                                         @Positive @RequestParam int page,
                                         @Positive @RequestParam int size ){
        Page<Question> pageQuestions = questionService.findMyQuestions(memberId,page-1,size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionMypageElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    ///// 질문 하나 아예 삭제
    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") @Positive long questionId){
        questionService.deleteQuestion( questionId );
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
