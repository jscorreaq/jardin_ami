package com.jardin.ami_sas.servicios;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jardin.ami_sas.modelos.Estudiante;
import com.jardin.ami_sas.repositorios.EstudianteRepository;

@Service
public class EstudianteService {
    // Inyectar el repositorio
    @Autowired
    private EstudianteRepository estudianteRepository;

    public List<Estudiante> listarTodos() {
        return estudianteRepository.findAll();
    }

    public Estudiante guardar(Estudiante estudiante) {
        return estudianteRepository.save(estudiante);
    }

    public Optional<Estudiante> buscarPorId(Long id) {
        return estudianteRepository.findById(id);
    }

    public void eliminar(Long id) {
        estudianteRepository.deleteById(id);
    }
}

