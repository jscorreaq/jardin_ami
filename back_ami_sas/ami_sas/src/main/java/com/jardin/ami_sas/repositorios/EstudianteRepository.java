package com.jardin.ami_sas.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jardin.ami_sas.modelos.Estudiante;
import org.springframework.stereotype.Repository;

@Repository
public interface EstudianteRepository extends JpaRepository<Estudiante, Long> { 
    
}

