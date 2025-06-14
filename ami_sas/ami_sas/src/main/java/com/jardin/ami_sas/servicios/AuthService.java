package com.jardin.ami_sas.servicios;

import com.jardin.ami_sas.modelos.User;
import com.jardin.ami_sas.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(AuthService.class);

    public User register(String email, String password, String rol) {
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new RuntimeException("Este correo ya está registrado");
        }

        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRol(rol == null ? "costumer" : rol);

        return userRepository.save(user);
    }

    public User authenticate(String email, String password) {
        logger.info("Authenticating user with email: {}", email);
        logger.debug("Received password: {}", password);

        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(password, user.getPassword())) {
            logger.warn("Incorrect password attempt for user: {}", email);
            throw new RuntimeException("Contraseña incorrecta");
        }

        logger.info("User authenticated successfully: {}", email);
        return user;
    }
}