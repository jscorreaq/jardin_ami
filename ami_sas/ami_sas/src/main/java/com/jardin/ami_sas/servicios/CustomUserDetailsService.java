package com.jardin.ami_sas.servicios;

import com.jardin.ami_sas.modelos.User;
import com.jardin.ami_sas.repositorios.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado con email: " + email));

        // Aquí creas un UserDetails a partir de tu entidad User.
        // Spring Security necesita un objeto UserDetails para realizar la autenticación.
        // Puedes usar la implementación User de Spring Security o tu propia implementación
        // si tu clase User implementa UserDetails. Usaremos la implementación de Spring Security.
        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword()) // La contraseña ya está codificada en tu entidad User
                .roles(user.getRol()) // Asigna los roles del usuario
                .build();
    }
}
