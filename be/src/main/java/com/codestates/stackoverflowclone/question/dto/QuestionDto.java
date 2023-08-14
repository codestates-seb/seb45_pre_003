package com.codestates.stackoverflowclone.question.dto;

import com.codestates.stackoverflowclone.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
public class QuestionDto {
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Post {
        private String title;
        private String body;
        private Long memberId;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Patch {
        private Long questionId;
        private String title;
        private String body;
        private Long visitCount;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class Response {
        private Long questionId;
        private String title;
        private String body;
        private Member member;

        private Long answerCount;
        private Long visitCount;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class ResponseElement {
        private Long questionId;
        private String title;
        private Member member;

        private Long answerCount;
        private Long visitCount;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
    @Getter@Setter@AllArgsConstructor@NoArgsConstructor
    public static class myPageElement {
        private Long questionId;
        private String title;

        private Long answerCount;
        private Long visitCount;

        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

}
