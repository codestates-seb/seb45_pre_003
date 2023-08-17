package com.codestates.stackoverflowclone.security.config;

import com.codestates.stackoverflowclone.security.filter.JwtAuthenticationFilter;
import com.codestates.stackoverflowclone.security.filter.JwtVerificationFilter;
import com.codestates.stackoverflowclone.security.handler.MemberAuthenticationEntryPoint;
import com.codestates.stackoverflowclone.security.handler.OAuth2MemberSuccessHandler;
import com.codestates.stackoverflowclone.security.jwt.JwtTokenizer;
import com.codestates.stackoverflowclone.security.util.CustomAuthorityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.web.OAuth2LoginAuthenticationFilter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final ApplicationEventPublisher publisher;
    private final CustomAuthorityUtils authorityUtils;

    @Value("$spring.security.oauth2.client.registration.google.client-id")
    private String clientId;
    @Value("$spring.security.oauth2.client.registration.google.client-secret")
    private String clientSecret;

    @Autowired
    public SecurityConfiguration(JwtTokenizer jwtTokenizer, ApplicationEventPublisher publisher, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.publisher = publisher;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
//                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .logout().logoutSuccessUrl("/")
                .and()
                .authorizeHttpRequests(
                        //TODO 권한 설정하기
                        authorize -> authorize
                                .antMatchers(HttpMethod.PATCH, "/members/**").hasRole("USER")
                                .antMatchers(HttpMethod.DELETE, "/members/**").hasRole("USER")
                                .antMatchers(HttpMethod.POST, "/answers/**").hasRole("USER")
                                .antMatchers(HttpMethod.PATCH, "/answers/**").hasRole("USER")
                                .antMatchers(HttpMethod.DELETE, "/answers/**").hasRole("USER")
                                .anyRequest().permitAll()
                )
                .oauth2Login(oauth2 -> oauth2
                        .successHandler(new OAuth2MemberSuccessHandler(jwtTokenizer, authorityUtils)))
                ;
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    //CORS 정책. 추후 수정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of("*"));
        configuration.setAllowedMethods(List.of("GET", "POST", "DELETE", "PATCH"));
        configuration.setAllowedHeaders(List.of("*"));

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager manager = builder.getSharedObject(AuthenticationManager.class);
            JwtAuthenticationFilter filter = new JwtAuthenticationFilter(manager, jwtTokenizer, publisher);
            filter.setFilterProcessesUrl("/login");

            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(filter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class)
                    .addFilterAfter(jwtVerificationFilter, OAuth2LoginAuthenticationFilter.class);
        }
    }

}
