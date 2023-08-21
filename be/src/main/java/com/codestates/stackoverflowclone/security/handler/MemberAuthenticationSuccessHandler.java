package com.codestates.stackoverflowclone.security.handler;

import com.codestates.stackoverflowclone.security.event.LoginEvent;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    private final ApplicationEventPublisher applicationEventPublisher;

    public MemberAuthenticationSuccessHandler(ApplicationEventPublisher applicationEventPublisher) {
        this.applicationEventPublisher = applicationEventPublisher;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        log.info("### Authenticated successfully!");

        String email = authentication.getName();
        applicationEventPublisher.publishEvent(new LoginEvent(email));
    }
}