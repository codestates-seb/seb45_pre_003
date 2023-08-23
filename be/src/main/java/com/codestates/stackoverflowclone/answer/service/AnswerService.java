package com.codestates.stackoverflowclone.answer.service;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.repository.AnswerRepository;
import com.codestates.stackoverflowclone.exception.BusinessLogicException;
import com.codestates.stackoverflowclone.exception.ExceptionCode;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer, String email){

        if ( !email.equals( answer.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        answer.getQuestion().setAnswerCount(answer.getQuestion().getAnswerCount() + 1);
        answer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer, String email){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        if ( !email.equals( answer.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        Optional.ofNullable(answer.getBody())
                .ifPresent(body->findAnswer.setBody(body));

        findAnswer.setModifiedAt(LocalDateTime.now());

        return answerRepository.save(findAnswer);
    }
    public List<Answer> findAnswersByQuestion(long questionId){

        return answerRepository.findAnswersByQuestionId(questionId);

    }
    public void setBest( long answerId, boolean isBest, String email){
        Answer answer = findVerifiedAnswer(answerId);
        if ( !email.equals( answer.getQuestion().getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        answer.setIsBest(isBest);
        answerRepository.save(answer);

        answer = findVerifiedAnswer(answerId);
        answer.getQuestion().setAnswered();//TODO: 잘 작동하는지 확인!
        answerRepository.save(answer);
    }
    public void deleteAnswer(long answerId, String email){

        Answer answer = findVerifiedAnswer(answerId);

        if ( !email.equals( answer.getMember().getEmail() ) ) {
            throw new BusinessLogicException(ExceptionCode.NOT_AUTHORIZED);
        }

        answer.getQuestion().setAnswerCount(answer.getQuestion().getAnswerCount() - 1);
        Answer deleteAnswer = answerRepository.save(answer);
        answerRepository.delete(deleteAnswer);

    }
    public Answer findVerifiedAnswer( long answerId ){
        Optional<Answer> answer = answerRepository.findById(answerId);
        Answer findAnswer = answer.orElseThrow(()->new RuntimeException("해당 id값에 해당하는 답변이 없습니다."));

        return findAnswer;
    }
}
