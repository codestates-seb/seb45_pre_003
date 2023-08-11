package com.codestates.stackoverflowclone.answer.dto;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class AnswerDto {
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Post {
        private String body;
        private Long questionId;
        private Long memberId;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Patch {
        private Long answerId;
        private String body;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Response {
        private Long answerId;
        private String body;
        private Member member;
        private Question question;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
