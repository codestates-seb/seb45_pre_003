package com.codestates.stackoverflowclone.member;

import com.codestates.stackoverflowclone.member.controller.MemberController;
import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
import com.codestates.stackoverflowclone.question.entity.Question;
import com.codestates.stackoverflowclone.question.mapper.QuestionMapper;
import com.codestates.stackoverflowclone.security.config.SecurityConfiguration;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
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
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;

//@WebMvcTest(controllers = MemberController.class,
//excludeAutoConfiguration = SecurityAutoConfiguration.class,
//excludeFilters = {
//        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfiguration.class)
//})
@WebMvcTest(controllers = MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberService service;
    @MockBean
    private MemberMapper mapper;
    @MockBean
    private QuestionMapper questionMapper;

    @Autowired
    private Gson gson;

    @Test
    public void postMemberTest() throws Exception {
        long memberId = 1L;
        String name = "test";
        String email = "test@test.com";
        String password = "test1234";


        MemberDto.Post post = MemberDto.Post.builder().email(email).name(name).password(password).build();
        String postContent = gson.toJson(post);

        MemberDto.Response response = MemberDto.Response.builder().id(memberId).email(email).name(name).build();

        Member member = new Member();
        member.setId(memberId);
        member.setName(name);
        member.setEmail(email);

        given(mapper.postToMember(Mockito.any(MemberDto.Post.class))).willReturn(member);
        given(service.createMember(Mockito.any(Member.class))).willReturn(member);
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(response);
        given(service.getQuestionByMemberId(Mockito.anyLong())).willReturn(new PageImpl<>(new ArrayList<>()));
        given(service.getQuestionWithMyAnswerByMemberId(Mockito.anyLong())).willReturn(new PageImpl<>(new ArrayList<>()));

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.post("/members")
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(postContent)
        );

        actions.andExpect(MockMvcResultMatchers.status().isCreated())
                .andDo(document("post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                                )
                        )));
    }

    @Test
    public void getMemberTest() throws Exception {
        long id = 1L;
        String name = "test";
        String email = "test@test.com";
        LocalDateTime createdAt = LocalDateTime.now();
        int visitCount = 0;
        int continuousVisitCount = 0;
        int questionCount = 1;
        int answerCount = 1;

        List<>


        MemberDto.GetMemberResponse response = MemberDto.GetMemberResponse.builder()
                .id(id).name(name).email(email).createdAt(createdAt).visitCount(visitCount).continuousVisitCount(continuousVisitCount).questionCount(questionCount).answerCount(answerCount).build();

        given(service.findMember(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToGetMemberResponse(Mockito.any(Member.class))).willReturn(response);
        given(service.getQuestionByMemberId(anyLong())).willReturn(new PageImpl<>(new ArrayList<>()));
        given(service.getQuestionWithMyAnswerByMemberId(anyLong())).willReturn(new PageImpl<>(new ArrayList<>()));
        given(questionMapper.questionsToQuestionMypageElements(Mockito.anyList())).willReturn(new ArrayList<>());

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/members/{member-id}", id)
                        .accept(MediaType.APPLICATION_JSON)
        );

        actions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document(
                        "get-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("조회하고자하는 회원의 식별자")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("회원 등록 날짜"),
                                        fieldWithPath("visitCount").type(JsonFieldType.NUMBER).description("방문 횟수"),
                                        fieldWithPath("continuousVisitCount").type(JsonFieldType.NUMBER).description("연속 방문 횟수"),
                                        fieldWithPath("questionCount").type(JsonFieldType.NUMBER).description("질문 수."),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("답변 수.")
                                        )
                        )
                ));

    }

    @Test
    public void getMembersTest() throws Exception {
        int page = 1;
        Member member1 = new Member();
        member1.setId(1L);
        member1.setName("test1");
        member1.setEmail("test1@test.com");
        Member member2 = new Member();
        member2.setId(2L);
        member2.setName("test2");
        member2.setEmail("test2@test.com");

        Page<Member> memberPage = new PageImpl<>(
                List.of(member1, member2),
                PageRequest.of(page - 1, 36, Sort.by("id").descending()),
                2);

        List<MemberDto.Response> responses = List.of(
                MemberDto.Response.builder().id(1L).name("test1").email("test1@test.com").build(),
                MemberDto.Response.builder().id(2L).name("test2").email("test2@test.com").build()
        );

        MemberDto.PageInfo pageInfo = MemberDto.PageInfo.builder().page(page).totalPage(page).totalElements(2).build();
        MemberDto.PageResponse pageResponse = MemberDto.PageResponse.builder().data(responses).pageInfo(pageInfo).build();

        given(service.findMembers(Mockito.anyInt())).willReturn(memberPage);
        given(mapper.memberListToresponseList(Mockito.anyList())).willReturn(responses);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.get("/members")
                        .param("page", String.valueOf(1))
                        .accept(MediaType.APPLICATION_JSON)
        );

        actions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("get-members",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestParameters(
                                parameterWithName("page").description("페이지 번호")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("조회 데이터"),
                                        fieldWithPath("data[].id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("data[].name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("data[].email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("현재 페이지 번호"),
                                        fieldWithPath("pageInfo.totalPage").type(JsonFieldType.NUMBER).description("총 페이지 수"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 데이터 수. 모든 회원의 수")
                                )
                        )
                        ));
    }

    @Test
    public void patchMemberTest() throws Exception {

        long id = 1L;
        String patchName = "patch";
        String patchPassword = "patch987";

        MemberDto.Patch patch = MemberDto.Patch.builder().name(patchName).password(patchPassword).build();
        String patchContent = gson.toJson(patch);

        MemberDto.Response response = MemberDto.Response.builder().id(id).email("test@test.com").name(patchName).build();

        Member member = new Member();
        member.setId(id);

        given(mapper.patchToMember(Mockito.any(MemberDto.Patch.class))).willReturn(member);
        given(service.updateMember(Mockito.any(Member.class))).willReturn(member);
        given(mapper.memberToResponse(Mockito.any(Member.class))).willReturn(response);

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.patch("/members/{member-id}", id)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(patchContent)
        );

        actions.andExpect(MockMvcResultMatchers.status().isOk())
                .andDo(document("patch-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("수정하고자 하는 회원 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("수정하고자 하는 이름"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("수정하고자 하는 비밀번호")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("id").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("수정된 이름"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일")
                                )
                        )
                        ));

    }

    @Test
    public void deleteMemberTest() throws Exception {
        long id = 1L;

        doNothing().when(service).deleteMember(anyLong());

        ResultActions actions = mockMvc.perform(
                RestDocumentationRequestBuilders.delete("/members/{member-id}", id)
                        .accept(MediaType.APPLICATION_JSON)
        );

        actions.andExpect(MockMvcResultMatchers.status().isNoContent())
                .andDo(document("delete-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("삭제할 회원 식별자")
                        )));
    }
}

