package com.codestates.stackoverflowclone.member.dto;

import lombok.Builder;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

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
        private String email;
        private String password;
    }

    @Getter
    @Builder
    public static class Response {
        private long id;
        private String name;
        private String email;
    }
}
