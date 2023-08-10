package com.codestates.stackoverflowclone.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class AnswerDto {
    @Getter@Setter@AllArgsConstructor
    public static class Post {
        private String body;
        private Long questionId;
        private Long memberId;
    }
    @Getter@Setter@AllArgsConstructor
    public static class Patch {
        private Long answerId;
        private String body;
    }
    @Getter@Setter@AllArgsConstructor
    public static class Response {
        private Long answerId;
        private String body;
        private Long memberId;
        private Long questionId;
    }
}
