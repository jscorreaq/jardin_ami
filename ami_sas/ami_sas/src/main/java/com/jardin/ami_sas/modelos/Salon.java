package com.jardin.ami_sas.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "salones")
public class Salon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroSalon;
    private String tipoClase;
    
    // Relación muchos a uno con Docente (ya existente)
    @ManyToOne // Muchos estudiantes a un docente
    @JoinColumn(name = "docente_identificacion") // Nombre de la columna FK en la tabla 'estudiantes'
    private Docente docenteEstudiante; // Renombrado para evitar conflicto con la relación OneToOne

    // Relación uno a uno con Docente (lado propietario)
    @OneToOne // Un salón a un docente
    @JoinColumn(name = "docente_id_asignado") // Nombre de la columna FK en la tabla 'salones'
    private Docente docente; // Referencia al docente asignado a este salón

    public Salon() {
    }
       
     // Constructor actualizado para incluir el docente asignado
    public Salon(Long numeroSalon, String tipoClase, Docente docente) {
        this.numeroSalon = numeroSalon;
        this.tipoClase = tipoClase;
        this.docente = docente; // Asignar el docente en el constructor
    }

    public Long getNumeroSalon() {
        return numeroSalon;
    }

    public void setNumeroSalon(Long numeroSalon) {
        this.numeroSalon = numeroSalon;
    }

    public String getTipoClase() {
        return tipoClase;
    }

    public void setTipoClase(String tipoClase) {
        this.tipoClase = tipoClase;
    }

    // Getter y setter para la relación muchos a uno con Docente (Estudiante)
    public Docente getDocenteEstudiante() {
        return docenteEstudiante;
    }

    public void setDocenteEstudiante(Docente docenteEstudiante) {
        this.docenteEstudiante = docenteEstudiante;
    }

    // Getter y setter para la relación uno a uno con Docente (Salon)
    public Docente getDocente() {
        return docente;
    }

    public void setDocente(Docente docente) {
        this.docente = docente;
    }
    
}
