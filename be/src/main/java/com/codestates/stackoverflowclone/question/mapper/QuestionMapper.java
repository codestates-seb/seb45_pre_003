package com.codestates.stackoverflowclone.question.mapper;

import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface QuestionMapper {
//    default
    Question questionPostToQuestion(QuestionDto.Post requestBody);//{
//        if (requestBody == null) {
//            return null;
//        } else {
//            Question question = new Question();
//            question.setTitle(requestBody.getTitle());
//            question.setBody(requestBody.getBody());
//            question.setMember(requestBody.getMember());
//            return question;
//        }//todo: memberService에서 memberId로 member객체 불러와서 question.setMember에 박기
//    }
    Question questionPatchToQuestion(QuestionDto.Patch requestBody);
    QuestionDto.Response questionToQuestionResponse( Question question);

}
