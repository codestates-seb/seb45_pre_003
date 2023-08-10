package com.codestates.stackoverflowclone.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
public class QuestionDto {
    @Getter@Setter@AllArgsConstructor
    public static class Post {
        private String title;
        private String body;
        private Long memberId;
    }
    @Getter@Setter@AllArgsConstructor
    public static class Patch {
        private Long questionId;
        private String title;
        private String body;
    }
    @Getter@Setter
    public static class Response {
        private Long questionId;
        private String title;
        private String body;
        private Long memberId;
    }
}
