package com.codestates.stackoverflowclone.answer.service;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
public class AnswerService {
    private AnswerRepository answerRepository;

    public Answer createAnswer(Answer answer){
        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer){
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());

        Optional.ofNullable(answer.getBody())
                .ifPresent(body->findAnswer.setBody(body));

        return answerRepository.save(findAnswer);
    }
    public void deleteAnswer(long answerId){
        Answer answer = findVerifiedAnswer(answerId);
        answerRepository.delete(answer);

    }
    public Answer findVerifiedAnswer( long answerId ){
        Optional<Answer> answer = answerRepository.findById(answerId);
        Answer findAnswer = answer.orElseThrow(()->new RuntimeException("해당 id값에 해당하는 답변이 없습니다."));

        return findAnswer;
    }
}
