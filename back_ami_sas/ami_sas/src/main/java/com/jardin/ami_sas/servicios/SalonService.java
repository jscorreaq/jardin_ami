package com.jardin.ami_sas.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jardin.ami_sas.modelos.Salon;
import com.jardin.ami_sas.repositorios.SalonRepository;

@Service
public class SalonService {
    @Autowired
    private SalonRepository salonRepository;

    public List<Salon> listarTodos() {
        return salonRepository.findAll();
    }

    public Salon guardar(Salon salon) {
        return salonRepository.save(salon);
    }

    public Optional<Salon> buscarPorId(Long id) {
        return salonRepository.findById(id);
    }

    public void eliminar(Long id) {
        salonRepository.deleteById(id);
    }
}

