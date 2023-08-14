package com.codestates.stackoverflowclone.question.service;

import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public Question createQuestion(Question question){
        return questionRepository.save(question);
    }
    public Question updateQuestion(Question question){
        Question findQuestion = findVerifiedQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle())
                .ifPresent(title->findQuestion.setTitle(title));
        Optional.ofNullable(question.getBody())
                .ifPresent(body->findQuestion.setBody(body));
        Optional.ofNullable(question.getVisitCount())
                .ifPresent(visitCount->findQuestion.setVisitCount(visitCount));

        return questionRepository.save(findQuestion);
    }
    public Page<Question> findQuestionsThisMonth(int page, int size){
        LocalDateTime current = LocalDateTime.now();
        LocalDateTime monthAgo = current.minus(1, ChronoUnit.MONTHS);

        return questionRepository.findQuestionListBetweenDates( monthAgo,current,
                PageRequest.of(page,size, Sort.by("visitCount").descending()) );
    }
    public Page<Question> findQuestionsThisWeek(int page, int size){
        LocalDateTime current = LocalDateTime.now();
        LocalDateTime weekAgo = current.minus(1, ChronoUnit.WEEKS);

        return questionRepository.findQuestionListBetweenDates(weekAgo, current,
                PageRequest.of(page,size, Sort.by("visitCount").descending()) );
    }
    public Page<Question> findQuestions(int page, int size){

        return questionRepository.findAll(PageRequest.of(page, size,
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
    @Transactional(readOnly = true)
    public Question readQuestion(long questionId){
        Question question = findVerifiedQuestion(questionId);
        question.setVisitCount(question.getVisitCount() + 1);
        Question readQ = questionRepository.save(question);

        return readQ;
    }
    public void deleteQuestion( long questionId ){
        Question question = findVerifiedQuestion(questionId);
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
