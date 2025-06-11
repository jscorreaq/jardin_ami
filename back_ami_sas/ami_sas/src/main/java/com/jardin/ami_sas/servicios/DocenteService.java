package com.jardin.ami_sas.servicios;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.jardin.ami_sas.modelos.Docente;
import com.jardin.ami_sas.repositorios.DocenteRepository;

@Service
public class DocenteService {
    @Autowired
    private DocenteRepository docenteRepository;

    public List<Docente> listarTodos() {
        return docenteRepository.findAll();
    }

    public Docente guardar(Docente docente) {
        return docenteRepository.save(docente);
    }

    public Optional<Docente> buscarPorId(Long id) {
        return docenteRepository.findById(id);
    }

    public void eliminar(Long id) {
        docenteRepository.deleteById(id);
    }
}

