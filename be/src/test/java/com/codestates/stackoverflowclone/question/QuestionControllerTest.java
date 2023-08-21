package com.codestates.stackoverflowclone.question;

import com.codestates.stackoverflowclone.answer.controller.AnswerController;
import com.codestates.stackoverflowclone.answer.mapper.AnswerMapper;
import com.codestates.stackoverflowclone.answer.service.AnswerService;
import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.controller.QuestionController;
import com.codestates.stackoverflowclone.question.dto.QuestionDto;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.mapper.QuestionMapper;
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
import org.springframework.security.test.context.support.WithAnonymousUser;
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

//@WebMvcTest(controllers = QuestionController.class,
//    excludeAutoConfiguration = SecurityAutoConfiguration.class,
//        excludeFilters = {
//                @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfiguration.class)
//        })
@WebMvcTest(QuestionController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
@AutoConfigureMockMvc(addFilters = false)
public class QuestionControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private QuestionService questionService;
    @MockBean
    private QuestionMapper questionMapper;
    @MockBean
    private MemberService memberService;
    @Autowired
    private Gson gson;

    @Test@WithMockUser(authorities = {"ROLE_USER"})
    public void postQuestionTest() throws Exception {
        // given
        // (6) 테스트 데이터
        QuestionDto.Post post = new QuestionDto.Post("질문의 제목", "질문의 본문", 1L);
        String postContent = gson.toJson(post);
        QuestionDto.Response response = new QuestionDto.Response(1L, "질문의 제목", "질문의 본문",
                MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(), 0L, 1L,
                false, LocalDateTime.now(), LocalDateTime.now());
        // (7) Mock 객체를 이용한 Stubbing
        given(questionMapper.questionPostToQuestion(Mockito.any(QuestionDto.Post.class), Mockito.any(MemberService.class)))
                .willReturn(new Question());
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(new Question());
        given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.post("/questions")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(postContent)
                        // (8) request 전송
                );


        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(document("post-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("등록할 질문 제목"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("등록할 질문 본문"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("질문작성자(등록요청자)의 식별자")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("등록된 질문 제목"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("등록된 질문 본문"),
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("질문 작성자 객체"),
                                        fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("질문 작성자 식별자"),
                                        fieldWithPath("member.name").type(JsonFieldType.STRING).description("질문 작성자 이름"),
                                        fieldWithPath("member.email").type(JsonFieldType.STRING).description("질문 작성자 이메일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("질문에 대한 답변갯수"),
                                        fieldWithPath("visitCount").type(JsonFieldType.NUMBER).description("질문에 대한 조회수"),
                                        fieldWithPath("answered").type(JsonFieldType.BOOLEAN).description("질문자가 답변선택을 했는지 여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("질문생성일시"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("질문수정일시")
                                )
                        )
                ));
    }
    @Test@WithMockUser(authorities = {"ROLE_USER"})
    public void patchQuestionTest() throws Exception {
        // given
        // (6) 테스트 데이터
        QuestionDto.Patch patch = new QuestionDto.Patch(1L, "질문의 제목", "질문의 본문");
        String patchContent = gson.toJson(patch);
        QuestionDto.Response response = new QuestionDto.Response(1L, "질문의 제목", "질문의 본문",
                MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(), 0L, 1L,
                false, LocalDateTime.now().minus(1, ChronoUnit.WEEKS), LocalDateTime.now());
        // (7) Mock 객체를 이용한 Stubbing
        given(questionMapper.questionPatchToQuestion(Mockito.any(QuestionDto.Patch.class)))
                .willReturn(new Question());
        given(questionService.updateQuestion(Mockito.any(Question.class))).willReturn(new Question());
        given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.patch("/questions/{question-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(patchContent)
                        // (8) request 전송
                );


        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("patch-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("question-id").description("수정할 질문 식별자")),
                        requestFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("수정할 질문의 식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("수정할 질문 제목"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("수정할 질문 본문")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("수정된 질문 제목"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("수정된 질문 본문"),
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("질문 작성자 객체"),
                                        fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("질문 작성자 식별자"),
                                        fieldWithPath("member.name").type(JsonFieldType.STRING).description("질문 작성자 이름"),
                                        fieldWithPath("member.email").type(JsonFieldType.STRING).description("질문 작성자 이메일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("질문에 대한 답변갯수"),
                                        fieldWithPath("visitCount").type(JsonFieldType.NUMBER).description("질문에 대한 조회수"),
                                        fieldWithPath("answered").type(JsonFieldType.BOOLEAN).description("질문자가 답변선택을 했는지 여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("질문생성일시"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("질문수정일시")
                                )
                        )
                ));
    }
    @Test@WithAnonymousUser
    public void getQuestionTest() throws Exception {
        // given
        // (6) 테스트 데이터
        long questionId = 1L;
        QuestionDto.Response response = new QuestionDto.Response(1L, "질문의 제목", "질문의 본문",
                MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(), 0L, 2L,
                false, LocalDateTime.now().minus(1, ChronoUnit.WEEKS), LocalDateTime.now().minus(1, ChronoUnit.WEEKS));
        // (7) Mock 객체를 이용한 Stubbing
        given(questionService.readQuestion(Mockito.anyLong())).willReturn(new Question());
        given(questionMapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/questions/{question-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("get-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("question-id").description("가져올 질문 식별자")),
                        responseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문식별자"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("body").type(JsonFieldType.STRING).description("질문 본문"),
                                        fieldWithPath("member").type(JsonFieldType.OBJECT).description("질문 작성자 객체"),
                                        fieldWithPath("member.id").type(JsonFieldType.NUMBER).description("질문 작성자 식별자"),
                                        fieldWithPath("member.name").type(JsonFieldType.STRING).description("질문 작성자 이름"),
                                        fieldWithPath("member.email").type(JsonFieldType.STRING).description("질문 작성자 이메일"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("질문에 대한 답변갯수"),
                                        fieldWithPath("visitCount").type(JsonFieldType.NUMBER).description("질문에 대한 조회수"),
                                        fieldWithPath("answered").type(JsonFieldType.BOOLEAN).description("질문자가 답변선택을 했는지 여부"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("질문생성일시"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("질문수정일시")
                                )
                        )

                ));
    }
    @Test@WithAnonymousUser
    public void getQuestionsTest() throws Exception {
        // given
        // (6) 테스트 데이터
        Question question1 = new Question(1L, "1번 질문 제목", "1번 질문 본문", new Member(), 0L, 17L, false );
        Question question2 = new Question(2L, "2번 질문 제목", "2번 질문 본문", new Member(), 0L, 10L, false );
        List<Question> list = new ArrayList<>();
        list.add(question1);
        list.add(question2);

        Page<Question> page = new PageImpl<>(list, PageRequest.of(0,10,
                Sort.by("visitCount").descending()),list.size());

        QuestionDto.ResponseElement response1 = new QuestionDto.ResponseElement(2L, "1번 질문 제목",
                MemberDto.Response.builder().id(1L).name("홍길동").email("hgd@gmail.com").build(), 0L, 17L,
                false, LocalDateTime.now(),
                LocalDateTime.now());
        QuestionDto.ResponseElement response2 = new QuestionDto.ResponseElement(1L, "2번 질문 제목",
                MemberDto.Response.builder().id(2L).name("임꺽정").email("lgj@gmail.com").build(), 0L, 10L,
                false, LocalDateTime.now().minus(1, ChronoUnit.WEEKS),
                LocalDateTime.now());
        List<QuestionDto.ResponseElement> responses = new ArrayList<>();
        responses.add(response1);
        responses.add(response2);
        MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
        params.add("searchWord","");
        params.add("tab", "month");
        params.add("page","1");
        params.add("size", "10");
        // (7) Mock 객체를 이용한 Stubbing
        given(questionService.findQuestionsThisWeek(Mockito.anyString(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionService.findQuestionsThisMonth(Mockito.anyString(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionService.findQuestions(Mockito.anyString(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionService.findUnansweredQuestions(Mockito.anyString(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionMapper.questionsToQuestionResponseElements(Mockito.anyList())).willReturn(responses);
        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/questions")
                                .params(params)
                                .accept(MediaType.APPLICATION_JSON)
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("get-questions",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(List.of(
                                        parameterWithName("searchWord").description("검색어, 예시에선 공백으로 두었다."),
                                        parameterWithName("tab").description("탭 종류. week(조회수순), month(조회수순), newest(최신순), unanswered(최신순)"),
                                        parameterWithName("page").description("페이지 번호"),
                                        parameterWithName("size").description("페이지 하나의 크기")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("검색된 질문들 객체리스트"),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("data[].member").type(JsonFieldType.OBJECT).description("질문 작성자 객체"),
                                        fieldWithPath("data[].member.id").type(JsonFieldType.NUMBER).description("질문 작성자 식별자"),
                                        fieldWithPath("data[].member.name").type(JsonFieldType.STRING).description("질문 작성자 이름"),
                                        fieldWithPath("data[].member.email").type(JsonFieldType.STRING).description("질문 작성자 이메일"),
                                        fieldWithPath("data[].answerCount").type(JsonFieldType.NUMBER).description("질문에 대한 답변갯수"),
                                        fieldWithPath("data[].visitCount").type(JsonFieldType.NUMBER).description("질문에 대한 조회수"),
                                        fieldWithPath("data[].answered").type(JsonFieldType.BOOLEAN).description("질문자가 답변선택을 했는지 여부"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("질문생성일시"),
                                        fieldWithPath("data[].modifiedAt").type(JsonFieldType.STRING).description("질문수정일시"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지정보를 담은 객체"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("현재 페이지 번호"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지의 크기"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 질문 갯수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지 갯수")
                                )
                        )

                ));
    }
    @Test@WithAnonymousUser
    public void getQuestionsOnMypageTest() throws Exception {
        // given
        // (6) 테스트 데이터
        Question question1 = new Question(1L, "1번 질문 제목", "1번 질문 본문", new Member(), 0L, 17L, false );
        Question question2 = new Question(2L, "2번 질문 제목", "2번 질문 본문", new Member(), 0L, 10L, false );
        List<Question> list = new ArrayList<>();
        list.add(question1);
        list.add(question2);

        Page<Question> page = new PageImpl<>(list, PageRequest.of(0,10,
                Sort.by("createdAt").descending()),list.size());

        QuestionDto.MypageElement response1 = new QuestionDto.MypageElement(2L, "2번 질문 제목", 1L, 0L,LocalDateTime.now());
        QuestionDto.MypageElement response2 = new QuestionDto.MypageElement(1L, "1번 질문 제목", 2L,0L,LocalDateTime.now().minus(1, ChronoUnit.WEEKS) );
        List<QuestionDto.MypageElement> responses = new ArrayList<>();
        responses.add(response1);
        responses.add(response2);
        MultiValueMap<String,String> params = new LinkedMultiValueMap<>();
        params.add("classification","answers");
        params.add("page","1");
        params.add("size", "10");

        // (7) Mock 객체를 이용한 Stubbing
        given(questionService.findQuestionsWithMyAnswer(Mockito.anyLong(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionService.findMyQuestions(Mockito.anyLong(),Mockito.anyInt(),Mockito.anyInt())).willReturn(page);
        given(questionMapper.questionsToQuestionMypageElements(Mockito.anyList())).willReturn(responses);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.get("/questions/onmypage/{member-id}", 1L)
                                .params(params)
                                .accept(MediaType.APPLICATION_JSON)
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("get-questionsOnMypage",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("member-id").description("회원 식별자 - 회원의 질문들, 회원의 답변들이 달린 질문들 긁어올때 필요")),
                        requestParameters(List.of(
                                        parameterWithName("classification").description("일종의 구분자. \"answers\", \"questions\" 각각 내가 단 답변들의 질문들, 내가 등록한 질문들" ),
                                        parameterWithName("page").description("페이지 번호"),
                                        parameterWithName("size").description("페이지 하나의 크기")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("질문들 객체리스트(최신순)"),
                                        fieldWithPath("data[].questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("data[].title").type(JsonFieldType.STRING).description("질문 제목"),
                                        fieldWithPath("data[].createdAt").type(JsonFieldType.STRING).description("질문생성일시"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지정보를 담은 객체"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("현재 페이지 번호"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지의 크기"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 질문 갯수"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지 갯수")
                                )
                        )

                ));
    }
    @Test@WithMockUser(authorities = {"ROLE_USER"})
    public void deleteQuestionTest() throws Exception {
        // given
        // (6) 테스트 데이터
        long answerId = 1L;

        // (7) Mock 객체를 이용한 Stubbing
        doNothing().when(questionService).deleteQuestion(Mockito.anyLong());

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders.delete("/questions/{question-id}", 1L)
                                .accept(MediaType.APPLICATION_JSON)
                        // (8) request 전송
                );

        // then
        actions
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andDo(document("delete-question",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(parameterWithName("question-id").description("삭제할 질문 식별자"))));

    }
}
