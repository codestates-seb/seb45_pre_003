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

    ///// week month 질문들 리스트 조회수순으로 뜯어와 보내기
    ///// newest unanswered 질문들 리스트 최신순으로 뜯어와 보내기
    ///// tab = "week" "month" "newest" "unanswered"
    @GetMapping
    public ResponseEntity getQuestions(@RequestParam String searchWord,
                                       @RequestParam String tab,
                                       @Positive @RequestParam int page,
                                       @Positive @RequestParam int size){
        Page<Question> pageQuestions = null;

        if(tab.equals("week"))
            pageQuestions = questionService.findQuestionsThisWeek(searchWord,page-1,size);
        else if(tab.equals("month"))
            pageQuestions = questionService.findQuestionsThisMonth(searchWord, page-1, size);
        else if(tab.equals("newest"))
            pageQuestions = questionService.findQuestions(searchWord, page-1, size);
        else if(tab.equals("unanswered"))
            pageQuestions = questionService.findUnansweredQuestions(searchWord, page-1, size);

        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(
                new QuestionListDto<>(questionMapper.questionsToQuestionResponseElements(questions),
                        pageQuestions),
                HttpStatus.OK);
    }

    ///// 마이페이지에 올릴 질문들
    ///// classification = "answers" "questions"
    @GetMapping("/onmypage/{member-id}")
    public ResponseEntity getQuestionsOnMypage(@PathVariable("member-id") long memberId,
                                               @RequestParam String classification,
                                               @Positive @RequestParam int page,
                                               @Positive @RequestParam int size){
        Page<Question> pageQuestions;

        if(classification.equals("answers"))
            pageQuestions = questionService.findQuestionsWithMyAnswer(memberId,page-1,size);
        else if(classification.equals("questions"))
            pageQuestions = questionService.findMyQuestions(memberId,page-1,size);
        else
            throw new RuntimeException("answers나 questions 중 하나 택해야 합니다. 타이포일수도");

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
