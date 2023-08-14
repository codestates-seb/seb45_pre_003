package com.codestates.stackoverflowclone.question.repository;

import com.codestates.stackoverflowclone.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query("SELECT q FROM Question q WHERE q.createdAt BETWEEN :startDateTime AND :endDateTime")
    Page<Question> findQuestionListBetweenDates(
            LocalDateTime startDateTime,
            LocalDateTime endDateTime,
            Pageable pageable);
    @Query("SELECT q FROM Question q WHERE q.member.id = :memberId")
    Page<Question> findQuestionsByMemberId(long memberId, Pageable pageable);

    @Query("SELECT q FROM Question q JOIN Answer a ON q.questionId = a.question.questionId WHERE a.member.id = :memberId")
    Page<Question> findQuestionsWithMyAnswer(long memberId, Pageable pageable);
}
