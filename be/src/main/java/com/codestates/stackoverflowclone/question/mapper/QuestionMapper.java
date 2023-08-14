package com.codestates.stackoverflowclone.question.mapper;

import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
    default Question questionPostToQuestion(QuestionDto.Post requestBody, MemberService memberService){
        if (requestBody == null) {
            return null;
        } else {
            Question question = new Question();
            question.setTitle(requestBody.getTitle());
            question.setBody(requestBody.getBody());
            question.setMember(memberService.findMember(requestBody.getMemberId()));
            return question;
        }
    }
    Question questionPatchToQuestion(QuestionDto.Patch requestBody);
    QuestionDto.Response questionToQuestionResponse( Question question);

    List<QuestionDto.ResponseElement> questionsToQuestionResponseElements(List<Question> questions);
    List<QuestionDto.MypageElement> questionsToQuestionMypageElements(List<Question> questions);
}
