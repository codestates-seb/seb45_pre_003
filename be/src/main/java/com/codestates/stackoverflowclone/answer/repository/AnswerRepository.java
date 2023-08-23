package com.codestates.stackoverflowclone.answer.repository;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query("SELECT a FROM Answer a WHERE a.question.questionId = :questionId")
    List<Answer> findAnswersByQuestionId(long questionId);
}
