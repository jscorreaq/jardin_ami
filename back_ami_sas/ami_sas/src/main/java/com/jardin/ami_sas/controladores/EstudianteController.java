package com.jardin.ami_sas.controladores;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.jardin.ami_sas.modelos.Estudiante;
import com.jardin.ami_sas.servicios.EstudianteService;

@RestController
@RequestMapping("/api/estudiantes")

public class EstudianteController {
    //inyectar el servicio
    @Autowired
    private EstudianteService estudianteService;

    //recursos para los libros
    @GetMapping
    public List<Estudiante> listarEstudiantes() {
        return estudianteService.listarTodos();
    }

    @PostMapping
    public Estudiante crearEstudiante(@RequestBody Estudiante estudiante) {
        return estudianteService.guardar(estudiante);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estudiante> obtenerEstudiante(@PathVariable Long id) {
        return estudianteService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void eliminarEstudiante(@PathVariable Long id) {
        estudianteService.eliminar(id);
    }
}

