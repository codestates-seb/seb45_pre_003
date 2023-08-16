package com.codestates.stackoverflowclone.question.mapper;

import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.Iterator;
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
    default QuestionDto.Response questionToQuestionResponse(Question question, MemberMapper memberMapper){
        if (question == null) {
            return null;
        } else {
            QuestionDto.Response response = new QuestionDto.Response();
            response.setQuestionId(question.getQuestionId());
            response.setTitle(question.getTitle());
            response.setBody(question.getBody());
            response.setMember(memberMapper.memberToResponse(question.getMember()));
            response.setAnswerCount(question.getAnswerCount());
            response.setVisitCount(question.getVisitCount());
            response.setAnswered(question.getAnswered());
            response.setCreatedAt(question.getCreatedAt());
            response.setModifiedAt(question.getModifiedAt());
            return response;
        }
    }

    default QuestionDto.ResponseElement questionToResponseElement(Question question, MemberMapper memberMapper) {
        if (question == null) {
            return null;
        } else {
            QuestionDto.ResponseElement responseElement = new QuestionDto.ResponseElement();
            responseElement.setQuestionId(question.getQuestionId());
            responseElement.setTitle(question.getTitle());
            responseElement.setMember(memberMapper.memberToResponse(question.getMember()));
            responseElement.setAnswerCount(question.getAnswerCount());
            responseElement.setVisitCount(question.getVisitCount());
            responseElement.setAnswered(question.getAnswered());
            responseElement.setCreatedAt(question.getCreatedAt());
            responseElement.setModifiedAt(question.getModifiedAt());
            return responseElement;
        }
    }

    default List<QuestionDto.ResponseElement> questionsToQuestionResponseElements(List<Question> questions, MemberMapper memberMapper) {
        if (questions == null) {
            return null;
        } else {
            List<QuestionDto.ResponseElement> list = new ArrayList(questions.size());
            Iterator var3 = questions.iterator();

            while(var3.hasNext()) {
                Question question = (Question)var3.next();
                list.add(this.questionToResponseElement(question, memberMapper));
            }

            return list;
        }
    }

    List<QuestionDto.MypageElement> questionsToQuestionMypageElements(List<Question> questions);
}
