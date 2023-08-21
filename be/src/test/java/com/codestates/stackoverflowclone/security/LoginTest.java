//package com.codestates.stackoverflowclone.security;
//
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.test.web.servlet.MockMvc;
//
//import java.util.List;
//
//import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.*;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//
//@WebMvcTest
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//@AutoConfigureMockMvc(addFilters = false)
//public class LoginTest {
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Test
//    public void loginTest() throws Exception {
//        String email = "test@test.com";
//        String password = "test1234";
//    }
//}