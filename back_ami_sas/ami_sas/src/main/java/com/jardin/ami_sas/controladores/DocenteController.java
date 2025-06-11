package com.jardin.ami_sas.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jardin.ami_sas.modelos.Docente;
import com.jardin.ami_sas.servicios.DocenteService;

@RestController
@RequestMapping("/api/docentes")
public class DocenteController {
    @Autowired
    private DocenteService docenteService;

    @GetMapping
    public List<Docente> listarDocentes() {
        return docenteService.listarTodos();
    }

    @PostMapping
    public Docente crearDocente(@RequestBody Docente docente) {
        return docenteService.guardar(docente);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Docente> obtenerDocente(@PathVariable Long id) {
        return docenteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void eliminarDocente(@PathVariable Long id) {
        docenteService.eliminar(id);
    }
}

