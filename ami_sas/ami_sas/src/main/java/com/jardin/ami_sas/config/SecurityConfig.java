package com.jardin.ami_sas.config;

import lombok.RequiredArgsConstructor; // Import RequiredArgsConstructor
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager; // Import AuthenticationManager
import org.springframework.security.authentication.AuthenticationProvider; // Import AuthenticationProvider
import org.springframework.security.authentication.dao.DaoAuthenticationProvider; // Import DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration; // Import AuthenticationConfiguration
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService; // Import UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder; // Import PasswordEncoder
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor // Add RequiredArgsConstructor
public class SecurityConfig {

    // Inject UserDetailsService and PasswordEncoder
    private final UserDetailsService userDetailsService; // This will inject CustomUserDetailsService
    private final PasswordEncoder passwordEncoder;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(AbstractHttpConfigurer::disable)
            .authorizeHttpRequests(auth -> auth
                // Permitir específicamente la ruta de login
                .requestMatchers("/api/login").permitAll()
                // Permitir cualquier otra solicitud (manteniendo tu configuración actual para el resto)
                .anyRequest().permitAll()
            )
            // Configure Spring Security to use the custom AuthenticationProvider
            .authenticationProvider(authenticationProvider()); // Use the custom provider

        return http.build();
    }

    // Define the AuthenticationProvider bean
    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService); // Set the custom UserDetailsService
        authProvider.setPasswordEncoder(passwordEncoder); // Set the custom PasswordEncoder
        return authProvider;
    }

    // Define the AuthenticationManager bean (often needed for explicit authentication in controllers)
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}
