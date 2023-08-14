package com.codestates.stackoverflowclone.member;

import com.codestates.stackoverflowclone.member.controller.MemberController;
import com.codestates.stackoverflowclone.member.dto.MemberDto;
import com.codestates.stackoverflowclone.member.entity.Member;
import com.codestates.stackoverflowclone.member.mapper.MemberMapper;
import com.codestates.stackoverflowclone.member.service.MemberService;
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
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.codestates.stackoverflowclone.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;

@WebMvcTest(controllers = MemberController.class,
excludeAutoConfiguration = SecurityAutoConfiguration.class,
excludeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = SecurityConfiguration.class)
})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class MemberControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberService service;
    @MockBean
    private MemberMapper mapper;

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
        int weekSinceRegistration = 0;
        int vote = 1;
        int tag = 1;
        int visitCount = 0;
        int continuousVisitCount = 0;
        int questionCount = 1;
        int answerCount = 1;

        MemberDto.GetMemberResponse response = MemberDto.GetMemberResponse.builder()
                .id(id).name(name).email(email).createdAt(createdAt).weekSinceRegistration(weekSinceRegistration).vote(vote).tag(tag).visitCount(visitCount).continuousVisitCount(continuousVisitCount).questionCount(questionCount).answerCount(answerCount).build();

        given(service.findMember(Mockito.anyLong())).willReturn(new Member());
        given(mapper.memberToGetMemberResponse(Mockito.any(Member.class))).willReturn(response);

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
                                        fieldWithPath("weekSinceRegistration").type(JsonFieldType.NUMBER).description("가입 주수"),
                                        fieldWithPath("vote").type(JsonFieldType.NUMBER).description("Vote 수. 미구현"),
                                        fieldWithPath("tag").type(JsonFieldType.NUMBER).description("Tag 수. 미구현"),
                                        fieldWithPath("visitCount").type(JsonFieldType.NUMBER).description("방문 횟수"),
                                        fieldWithPath("continuousVisitCount").type(JsonFieldType.NUMBER).description("연속 방문 횟수"),
                                        fieldWithPath("questionCount").type(JsonFieldType.NUMBER).description("질문 수. 미구현"),
                                        fieldWithPath("answerCount").type(JsonFieldType.NUMBER).description("답변 수. 미구현")
                                        )
                        )
                ));

    }

//    @Test
//    public void getMembersTest() throws Exception {
//
//    }
//
//    @Test
//    public void patchMemberTest() throws Exception {
//
//    }
//
//    @Test
//    public void deleteMemberTest() throws Exception {
//
//    }
}

