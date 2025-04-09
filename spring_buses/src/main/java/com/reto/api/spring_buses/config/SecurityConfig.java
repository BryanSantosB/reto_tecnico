package com.reto.api.spring_buses.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.SessionManagementConfigurer.SessionFixationConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(auth -> auth
                .requestMatchers("/login","/logout", "/error","/buses", "/marcas").permitAll()
                .anyRequest().authenticated())
            .formLogin(form -> form
                .successHandler(successHandler())
                .permitAll())
            .sessionManagement(sesion -> sesion
                .sessionCreationPolicy(SessionCreationPolicy.ALWAYS)
                .sessionFixation(SessionFixationConfigurer::migrateSession)
                .invalidSessionUrl("/login")
                .maximumSessions(1)
                .expiredUrl("/login")
                .sessionRegistry(sesionRegistry()));
        
        return http.build();
    }

    public AuthenticationSuccessHandler successHandler() {
        return (request, response, authentication) -> {
            response.sendRedirect("/buses");
        };
    }

    public SessionRegistry sesionRegistry(){
        return new SessionRegistryImpl();
    }
}
