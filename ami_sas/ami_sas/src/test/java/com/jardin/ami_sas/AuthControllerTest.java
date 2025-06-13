package com.jardin.ami_sas;

import com.jardin.ami_sas.servicios.AuthService;
import com.jardin.ami_sas.servicios.JwtService;
import com.jardin.ami_sas.controladores.AuthController;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

// Importar clases de auto-configuración de JPA
import org.springframework.boot.autoconfigure.orm.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.hamcrest.Matchers.containsString;


@WebMvcTest(
    controllers = AuthController.class, // Especifica el controlador a probar
    excludeAutoConfiguration = { // Excluir auto-configuraciones de JPA
        JpaRepositoriesAutoConfiguration.class,
        HibernateJpaAutoConfiguration.class
    }
)

@AutoConfigureMockMvc
public class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc; // Inyecta MockMvc para realizar peticiones

    @MockBean
    private AuthService authService; // Mock de AuthService

    @MockBean
    private JwtService jwtService; // Mock de JwtService

    @Test
    public void testHomeEndpoint() throws Exception {
        mockMvc.perform(get("/api/")) // Realiza una petición GET a /api/
               .andExpect(status().isOk()) // Espera un estado HTTP 200 OK
               .andExpect(content().string(containsString("Bienvenido a la API"))); // Verifica el contenido de la respuesta
    }

    // Puedes añadir más métodos @Test para probar otros endpoints (register, login)
    // utilizando mockMvc.perform(post(...)) y configurando los mocks necesarios
}

