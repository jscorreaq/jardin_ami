package com.jardin.ami_sas.modelos;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;



@Entity
@Table(name = "estudiantes")
public class Estudiante {
    @Id  // Define el atributo id como primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long identificacion;
    private String nombre;
    private int edad;
    private String grupo;
    
    // Relación muchos a uno con Docente
    @ManyToOne // Muchos estudiantes a un docente
    @JoinColumn(name = "docente_identificacion") // Nombre de la columna FK en la tabla 'estudiantes'
    @JsonBackReference // Evita la recursión infinita en la serialización
    private Docente docente; // Referencia al docente

    public Estudiante() {
    }
    

    public Estudiante(Long identificacion, String nombre, int edad, String grupo) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.edad = edad;
        this.grupo = grupo;
    }

    public Long getIdentificacion() {
        return identificacion;
    }

    public void setIdentificacion(Long identificacion) {
        this.identificacion = identificacion;

    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public int getEdad() {
        return edad;
    }
    public void setEdad(int edad) {
        this.edad = edad;
    }
    public String getGrupo() {
        return grupo;
    }
    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }

    // Agregar getter y setter para el docente
    public Docente getDocente() {
        return docente;
    }

    public void setDocente(Docente docente) {
        this.docente = docente;
    }
  
}


