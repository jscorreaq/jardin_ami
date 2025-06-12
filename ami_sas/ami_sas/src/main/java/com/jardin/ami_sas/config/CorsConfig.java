package com.jardin.ami_sas.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Aplica la configuración CORS a todas las rutas
                .allowedOrigins("*") // Permite peticiones desde estos orígenes (reemplaza con tus dominios)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Permite estos métodos HTTP
                .allowedHeaders("*") // Permite todos los encabezados en la petición
                .allowCredentials(true) // Permite el envío de credenciales (cookies, encabezados de autorización, etc.)
                .maxAge(3600); // Tiempo máximo en segundos que la respuesta de pre-vuelo puede ser cacheada
    }
}
