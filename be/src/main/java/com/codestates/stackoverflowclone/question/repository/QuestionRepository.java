package com.codestates.stackoverflowclone.question.repository;

import com.codestates.stackoverflowclone.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
