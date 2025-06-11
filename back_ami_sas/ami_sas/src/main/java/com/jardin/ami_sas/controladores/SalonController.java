package com.jardin.ami_sas.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jardin.ami_sas.modelos.Salon;
import com.jardin.ami_sas.servicios.SalonService;

@RestController
@RequestMapping("/api/salones")
public class SalonController {
    @Autowired
    private SalonService salonService;

    @GetMapping
    public List<Salon> listarSalones() {
        return salonService.listarTodos();
    }

    @PostMapping
    public Salon crearSalon(@RequestBody Salon salon) {
        return salonService.guardar(salon);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Salon> obtenerSalon(@PathVariable Long id) {
        return salonService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void eliminarSalon(@PathVariable Long id) {
        salonService.eliminar(id);
    }
}
