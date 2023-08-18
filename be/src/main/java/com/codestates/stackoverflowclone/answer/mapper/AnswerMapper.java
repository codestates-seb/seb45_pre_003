package com.codestates.stackoverflowclone.answer.mapper;

import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    default Answer answerPostToAnswer(AnswerDto.Post requestBody, MemberService memberService,
                                      QuestionService questionService){
        if (requestBody == null) {
            return null;
        } else {
            Answer answer = new Answer();
            answer.setBody(requestBody.getBody());

            answer.setIsBest(false);

            answer.setMember(memberService.findMember(requestBody.getMemberId()));
            answer.setQuestion(questionService.findVerifiedQuestion(requestBody.getQuestionId()));
            return answer;
        }
    }
    Answer answerPatchToAnswer(AnswerDto.Patch requestBody);
    default AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if (answer == null) {
            return null;
        } else {
            AnswerDto.Response response = new AnswerDto.Response();
            response.setAnswerId(answer.getAnswerId());
            response.setBody(answer.getBody());
            response.setMember( MemberDto.Response.builder().id(answer.getMember().getId())
                                                            .name(answer.getMember().getName())
                                                            .email(answer.getMember().getEmail())
                                                            .build());
            response.setQuestionId(answer.getQuestion().getQuestionId());
            response.setIsBest(answer.getIsBest());
            response.setCreatedAt(answer.getCreatedAt());
            return response;
        }
    }
    default List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers) {
        if (answers == null) {
            return null;
        } else {
            List<AnswerDto.Response> list = new ArrayList(answers.size());
            Iterator var3 = answers.iterator();

            while(var3.hasNext()) {
                Answer answer = (Answer)var3.next();
                list.add(this.answerToAnswerResponse(answer));
            }

            return list;
        }
    }
}
