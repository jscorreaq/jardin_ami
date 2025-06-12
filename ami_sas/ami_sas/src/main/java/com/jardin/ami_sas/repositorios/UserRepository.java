package com.jardin.ami_sas.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;
import com.jardin.ami_sas.modelos.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
