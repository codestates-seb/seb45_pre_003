package com.codestates.stackoverflowclone.member.dto;

import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {
    @Getter
    @Builder
    public static class Post {
        //TODO name 조건 생각해보기
        @NotBlank
        private String name;

        //TODO email 최대 길이 정하기. 일단은 30자 이하 > member에도 적용하기
        @Pattern(regexp = "^(?=.{1,30}$)((?!\\.)[\\w\\-_.]*[^.])(@\\w+)(\\.\\w+(\\.\\w+)?[^.\\W])$")
        private String email;

        //TODO password 최대 길이 정하기. 일단은 20자 이하 > member에도 적용하기
        @Pattern(regexp = "^((?=\\S*?[a-zA-Z])(?=\\S*?[0-9]).{7,20})\\S$")
        private String password;
    }

    @Getter
    @Builder
    public static class Patch {
        private String name;
        private String password;
    }

    @Getter
    @Builder
    public static class GetMemberResponse {
        private long id;
        private String name;
        private String email;
        private LocalDateTime createdAt;
        private int weekSinceRegistration;
        private int visitCount;
        private int continuousVisitCount;
        @Setter
        private QuestionsResponse questionsData;
        @Setter
        private QuestionsResponse questionsWithMyAnswers;
        private int questionCount;
        private int answerCount;
    }

    @Getter
    @Builder
    public static class QuestionsResponse {
        private List<QuestionDto.MypageElement> data;
    }

    @Getter
    @Builder
    public static class Response {
        private long id;
        private String name;
        private String email;
    }

    @Getter
    @Builder
    public static class PageResponse {
        private List<MemberDto.Response> data;
        private PageInfo pageInfo;
    }

    @Getter
    @Builder
    public static class PageInfo {
        private int page;
        private int totalPage;
        private long totalElements;
    }
}
