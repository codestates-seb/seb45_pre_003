package com.codestates.stackoverflowclone.question.service;

import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
        return questionRepository.save(findQuestion);

    }
    public void deleteQuestion( long questionId ){
        Question question = findVerifiedQuestion(questionId);
        questionRepository.delete(question);
    }

    @Transactional(readOnly = true)
    public Question findVerifiedQuestion( long questionId ){
        Optional<Question> question = questionRepository.findById(questionId);
        Question findQuestion =
                question.orElseThrow(()->new RuntimeException("해당 id에 해당하는 질문이 없습니다."));
        return findQuestion;
    }

}
