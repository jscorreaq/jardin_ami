package com.jardin.ami_sas.repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import com.jardin.ami_sas.modelos.Salon;
import org.springframework.stereotype.Repository;

@Repository
public interface SalonRepository extends JpaRepository<Salon, Long> { }

