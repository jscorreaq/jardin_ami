package com.jardin.ami_sas.servicios;


import com.jardin.ami_sas.modelos.User;
import com.jardin.ami_sas.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
     private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    public User register(String email, String password, String role) {
        Optional<User> existingUser = userRepository.findByEmail(email);
        if (existingUser.isPresent()) {
            throw new RuntimeException("Este correo ya está registrado");
        }
        
        User user = new User();
        user.setEmail(email);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role == null ? "cliente" : role);
        
        return userRepository.save(user);
    }
    
    public User authenticate(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        
        if (!passwordEncoder.matches(password, user.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }
        
        return user;
    }
}