package com.codestates.stackoverflowclone.answer.repository;

import com.codestates.stackoverflowclone.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
