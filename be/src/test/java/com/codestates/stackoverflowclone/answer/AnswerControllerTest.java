package com.codestates.stackoverflowclone.answer;

import com.codestates.stackoverflowclone.answer.controller.AnswerController;
import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.mapper.AnswerMapper;
import com.codestates.stackoverflowclone.answer.service.AnswerService;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.service.QuestionService;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.List;

import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;

@WebMvcTest(AnswerController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AnswerService answerService;
    @MockBean
    private AnswerMapper answerMapper;
    @Autowired
    private Gson gson;
/*
    @Test
    public void postAnswerTest() throws Exception {
        // given
        // (6) 테스트 데이터
        AnswerDto.Post post = new AnswerDto.Post("body body", 1L, 1L);
        String postContent = gson.toJson(post);
        AnswerDto.Response response = new AnswerDto.Response(1L, "body body", new Member(),
                new Question(), false, LocalDateTime.now(), LocalDateTime.now());
        // (7) Mock 객체를 이용한 Stubbing
        given(answerMapper.answerPostToAnswer(Mockito.any(AnswerDto.Post.class),
                Mockito.any(MemberService.class),Mockito.any(QuestionService.class))).willReturn(new Answer());
        given(answerService.createAnswer(Mockito.any(Answer.class))).willReturn(new Answer());
        given(answerMapper.answerToAnswerResponse(Mockito.any(Answer.class))).willReturn(response);
        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/answers")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(postContent)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(document("post-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("답변 본문"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("답변작성자의 식별자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변식별자"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("답변 본문"),
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("답변 작성자"),
                                        fieldWithPath("question").type(JsonFieldType.OBJECT).description("답변의 질문"),
                                        fieldWithPath("isBest").type(JsonFieldType.BOOLEAN).description("질문자채택여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("답변생성일"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("답변수정일")
                                        )
                        )
                ));// (10) API 문서 스펙 정보 추가
    }
//    @Test
//    public void patchAnswerTest() throws Exception {
//        // given
//        // (6) 테스트 데이터
//
//        // (7) Mock 객체를 이용한 Stubbing
//
//        // when
//        ResultActions actions =
//                mockMvc.perform(
//                        // (8) request 전송
//                );
//
//        // then
//        actions
//                .andExpect(// (9) response에 대한 기대 값 검증)
//                .andDo(document(
//                        // (10) API 문서 스펙 정보 추가
//                ));
//    }
//    @Test
//    public void setBestTest() throws Exception {
//        // given
//        // (6) 테스트 데이터
//
//        // (7) Mock 객체를 이용한 Stubbing
//
//        // when
//        ResultActions actions =
//                mockMvc.perform(
//                        // (8) request 전송
//                );
//
//        // then
//        actions
//                .andExpect(// (9) response에 대한 기대 값 검증)
//                .andDo(document(
//                        // (10) API 문서 스펙 정보 추가
//                ));
//    }
//    @Test
//    public void getAnswersTest() throws Exception {
//        // given
//        // (6) 테스트 데이터
//
//        // (7) Mock 객체를 이용한 Stubbing
//
//        // when
//        ResultActions actions =
//                mockMvc.perform(
//                        // (8) request 전송
//                );
//
//        // then
//        actions
//                .andExpect(// (9) response에 대한 기대 값 검증)
//                .andDo(document(
//                        // (10) API 문서 스펙 정보 추가
//                ));
//    }
//    @Test
//    public void deleteAnswerTest() throws Exception {
//        // given
//        // (6) 테스트 데이터
//
//        // (7) Mock 객체를 이용한 Stubbing
//
//        // when
//        ResultActions actions =
//                mockMvc.perform(
//                        // (8) request 전송
//                );
//
//        // then
//        actions
//                .andExpect(// (9) response에 대한 기대 값 검증)
//                .andDo(document(
//                        // (10) API 문서 스펙 정보 추가
//                ));
//    }*/
}
