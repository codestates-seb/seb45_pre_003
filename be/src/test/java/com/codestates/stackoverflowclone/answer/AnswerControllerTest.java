package com.codestates.stackoverflowclone.answer;

import com.codestates.stackoverflowclone.answer.controller.AnswerController;
import com.codestates.stackoverflowclone.answer.dto.AnswerDto;
import com.codestates.stackoverflowclone.answer.entity.Answer;
import com.codestates.stackoverflowclone.answer.mapper.AnswerMapper;
import com.codestates.stackoverflowclone.answer.service.AnswerService;
import com.codestates.stackoverflowclone.member.controller.MemberController;
import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.repository.MemberRepository;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.repository.QuestionRepository;
import com.codestates.stackoverflowclone.question.service.QuestionService;
//import com.codestates.stackoverflowclone.security.config.SecurityConfiguration;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.List;

import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.request.RequestDocumentation.*;

//@WebMvcTest(controllers = AnswerController.class,
//        excludeAutoConfiguration = SecurityAutoConfiguration.class,
//        excludeFilters = {
//                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfiguration.class)
//        })
//@WebMvcTest(AnswerController.class) // webmvctest 복구 대상
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
@SpringBootTest@AutoConfigureMockMvc // 제거대상, @WithMockUser(roles = "USER")각 메서드에서 제거 대상
public class AnswerControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private AnswerService answerService;
    @MockBean
    private AnswerMapper answerMapper;
    @MockBean
    private MemberService memberService;
    @MockBean
    private QuestionService questionService;
    @Autowired
    private Gson gson;
    @Test@WithMockUser(roles = "USER")
    public void postAnswerTest() throws Exception {
        // given
        // (6) 테스트 데이터
        AnswerDto.Post post = new AnswerDto.Post("body body", 1L, 1L);
        String postContent = gson.toJson(post);
        AnswerDto.Response response = new AnswerDto.Response(1L, "body body", MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(),
                1L, false, LocalDateTime.now(), LocalDateTime.now());
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
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("답변 작성자 객치"),
                                        fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("답변 작성자 식별자"),
                                        fieldWithPath("member.name").type(JsonFieldType.STRING).description("답변 작성자 이름"),
                                        fieldWithPath("member.email").type(JsonFieldType.STRING).description("답변 작성자 이메일"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("답변의 질문 식별자"),
                                        fieldWithPath("isBest").type(JsonFieldType.BOOLEAN).description("질문자답변채택여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("답변생성일시"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("답변수정일시")
                                        )
                        )
                ));// (10) API 문서 스펙 정보 추가
    }
    @Test@WithMockUser(roles = "USER")
    public void patchAnswerTest() throws Exception {
        // given
        // (6) 테스트 데이터
        AnswerDto.Patch patch = new AnswerDto.Patch( 1L , "본문 본문 본문");
        String patchContent = gson.toJson(patch);
        AnswerDto.Response response = new AnswerDto.Response(1L, "본문 본문 본문",
                MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(),
                1L, false, LocalDateTime.now().minus(1, ChronoUnit.WEEKS),
                LocalDateTime.now());
        // (7) Mock 객체를 이용한 Stubbing
        given(answerMapper.answerPatchToAnswer(Mockito.any(AnswerDto.Patch.class)))
                .willReturn(new Answer());
        given(answerService.updateAnswer(Mockito.any(Answer.class)))
                .willReturn(new Answer());
        given(answerMapper.answerToAnswerResponse(Mockito.any(Answer.class)))
                .willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.patch("/answers/{answer-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(patchContent)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("patch-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("answer-id").description("답변 식별자")),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자, PathParameter에 이미 있으며 아무값이나 넣으면 된다."),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("답변의 수정할 본문")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변식별자"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("답변 본문"),
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("답변 작성자 객체"),
                                        fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("답변 작성자 식별자"),
                                        fieldWithPath("member.name").type(JsonFieldType.STRING).description("답변 작성자 이름"),
                                        fieldWithPath("member.email").type(JsonFieldType.STRING).description("답변 작성자 이메일"),
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("답변의 질문 식별자"),
                                        fieldWithPath("isBest").type(JsonFieldType.BOOLEAN).description("질문자답변채택여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("답변생성일시"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("답변수정일시")
                                )
                        )

                ));
    }
    @Test@WithMockUser(roles = "USER")
    public void setBestTest() throws Exception {
        // given
        // (6) 테스트 데이터
        long answerId = 1L;

        // (7) Mock 객체를 이용한 Stubbing
        doNothing().when(answerService).setBest(Mockito.anyLong(), Mockito.anyBoolean());
        //MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
        //params.add("isBest","true");
        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.patch("/answers/best/{answer-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                                .queryParam("isBest", "true")
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("set-BestAnswer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("answer-id").description("채택 또는 채택취소할답변 식별자") ),
                        requestParameters(List.of(
                                            parameterWithName("isBest").description("채택/채택취소 여부")
                                            )
                                    )
                        )
                    );
    }
    @Test@WithMockUser(roles = "USER")
    public void getAnswersTest() throws Exception {
        // given
        // (6) 테스트 데이터
        Answer answer1 = new Answer(1L, "첫번째 테스트용 답변", new Member(), new Question(), false, LocalDateTime.now());
        Answer answer2 = new Answer(2L, "두번째 테스트용 답변", new Member(), new Question(), false, LocalDateTime.now());
        List<Answer> list = new ArrayList<>();
        list.add(answer1);
        list.add(answer2);

        AnswerDto.Response answerResponse1 = new AnswerDto.Response(1L, "첫번째 테스트용 답변", MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(), 1L, false, LocalDateTime.now().minus(2, ChronoUnit.WEEKS), LocalDateTime.now());
        AnswerDto.Response answerResponse2 = new AnswerDto.Response(2L, "두번째 테스트용 답변", MemberDto.Response.builder().id(2L).name("임꺽정").email("lgj@gmail.com").build(), 1L, false, LocalDateTime.now().minus(1, ChronoUnit.WEEKS), LocalDateTime.now());
        List<AnswerDto.Response> responses = new ArrayList<>();
        responses.add(answerResponse1);
        responses.add(answerResponse2);
        // (7) Mock 객체를 이용한 Stubbing
        given(answerService.findAnswersByQuestion(Mockito.anyLong())).willReturn(list);
        given(answerMapper.answersToAnswerResponses(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/answers/question/{question-id}", 1L)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("get-answers",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                        parameterWithName("question-id").description("해당 질문 식별자. 해당 질문에 달린 답변들을 끌고오기 위해 필요")
                        ),
                        responseFields(List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("답변들 리스트"),
                                        fieldWithPath("data[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("data[].body").type(JsonFieldType.STRING).description("답변 본문"),
                                        fieldWithPath("data[].member").type(JsonFieldType.OBJECT).description("답변 작성자 객체"),
                                        fieldWithPath("data[].member.id").type(JsonFieldType.NUMBER).description("답변 작성자 식별자"),
                                        fieldWithPath("data[].member.name").type(JsonFieldType.STRING).description("답변 작성자 이름"),
                                        fieldWithPath("data[].member.email").type(JsonFieldType.STRING).description("답변 작성자 이메일"),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("답변들이 달린 질문 식별자"),
                                        fieldWithPath("data[].isBest").type(JsonFieldType.BOOLEAN).description("각 답변 채택여부"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("각 답변 생성 날짜/시간"),
                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("각 답변 수정 날짜/시간")
                                )
                        )

                ));
    }
    @Test@WithMockUser(roles = "USER")
    public void deleteAnswerTest() throws Exception {
        // given
        // (6) 테스트 데이터
        long answerId = 1L;

        // (7) Mock 객체를 이용한 Stubbing
        doNothing().when(answerService).deleteAnswer(Mockito.anyLong());

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/answers/{answer-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andDo(document("delete-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("answer-id").description("삭제할 답변 식별자"))));

    }
}