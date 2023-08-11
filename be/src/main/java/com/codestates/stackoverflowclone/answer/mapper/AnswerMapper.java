package com.codestates.stackoverflowclone.answer.mapper;

import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostToAnswer(AnswerDto.Post requestBody, MemberService memberService,
                                      QuestionService questionService){
        if (requestBody == null) {
            return null;
        } else {
            Answer answer = new Answer();
            answer.setBody(requestBody.getBody());
            answer.setMember(memberService.findMember(requestBody.getMemberId()));
            answer.setQuestion(questionService.findVerifiedQuestion(requestBody.getQuestionId()));
            return answer;
        }
    }
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody);
    AnswerDto.Response answerToAnswerResponse(Answer answer);
}
