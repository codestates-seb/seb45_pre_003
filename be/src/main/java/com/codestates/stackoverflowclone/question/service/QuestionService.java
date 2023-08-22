package com.codestates.stackoverflowclone.question.service;

import com.codestates.stackoverflowclone.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.exception.ExceptionCode;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Optional;

@Service
@Transactional
public class QuestionService {
    private QuestionRepository questionRepository;

    public QuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question, String email){

        if ( !email.equals( question.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        question.setAnswerCount(0L);
        question.setVisitCount(0L);
        question.setAnswered(false);
        question.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(question);
    }
    public Question updateQuestion(Question question, String email){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        if ( !email.equals( findQuestion.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        Optional.ofNullable(question.getTitle())
                .ifPresent(title->findQuestion.setTitle(title));
        Optional.ofNullable(question.getBody())
                .ifPresent(body->findQuestion.setBody(body));

        findQuestion.setModifiedAt(LocalDateTime.now());

        return questionRepository.save(findQuestion);
    }
    public Page<Question> findQuestionsThisMonth(String searchWord, int page, int size){
        LocalDateTime current = LocalDateTime.now();
        LocalDateTime monthAgo = current.minus(1, ChronoUnit.MONTHS);

        return questionRepository.findQuestionListBetweenDates( searchWord, monthAgo,current,
                PageRequest.of(page,size, Sort.by("visitCount").descending()) );
    }
    public Page<Question> findQuestionsThisWeek(String searchWord,int page,int size){
        LocalDateTime current = LocalDateTime.now();
        LocalDateTime weekAgo = current.minus(1, ChronoUnit.WEEKS);

        return questionRepository.findQuestionListBetweenDates(searchWord,weekAgo, current,
                PageRequest.of(page,size, Sort.by("visitCount").descending()) );
    }
    public Page<Question> findQuestions(String searchWord, int page, int size){

        return questionRepository.findByTitleContaining(searchWord, PageRequest.of(page, size,
                Sort.by("createdAt").descending()) );
    }
    public Page<Question> findUnansweredQuestions(String searchWord, int page, int size){

        return questionRepository.findAllByAnswered(searchWord,false, PageRequest.of(page, size,
                Sort.by("createdAt").descending()) );
    }
    public Page<Question> findMyQuestions( long memberId, int page, int size){

        return questionRepository.findQuestionsByMemberId(memberId,
                PageRequest.of(page,size,Sort.by("createdAt").descending()) );
    }
    public Page<Question> findQuestionsWithMyAnswer(long memberId,int page,int size){

        return questionRepository.findQuestionsWithMyAnswer(memberId,
                PageRequest.of(page,size,Sort.by("createdAt").descending()) );
    }
    public Question readQuestion(long questionId){
        Question question = findVerifiedQuestion(questionId);
        question.setVisitCount(question.getVisitCount() + 1);
        //LocalDateTime modifiedAt = question.getModifiedAt();
        Question readQ = questionRepository.save(question);

        return readQ;
    }

    public void deleteQuestion( long questionId, String email ){

        Question question = findVerifiedQuestion(questionId);

        if ( !email.equals( question.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        questionRepository.delete(question);
    }
    public Question saveQuestion( Question question ){
        return questionRepository.save(question);
    }
    @Transactional(readOnly = true)
    public Question findVerifiedQuestion( long questionId ){
        Optional<Question> question = questionRepository.findById(questionId);
        Question findQuestion =
                question.orElseThrow(()->new RuntimeException("해당 id에 해당하는 질문이 없습니다."));
        return findQuestion;
    }

}
