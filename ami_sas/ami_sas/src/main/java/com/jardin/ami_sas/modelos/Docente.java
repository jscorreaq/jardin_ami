package com.jardin.ami_sas.modelos;

import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "docentes")
public class Docente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long identificacion;
    private String nombre;
    private String grupo;
    private String tipoMateria;

    //relacion uno a muchos con estudiante
    @OneToMany(mappedBy = "docente") // 'docente' es el nombre del atributo en la clase Estudiante
    @JsonManagedReference // Para manejar la serialización JSON y evitar bucles infinitos
    private List<Estudiante> estudiantes; // Agregar la lista de estudiantes

     // Relación uno a uno con salon (lado inverso)
    @OneToOne(mappedBy = "docente") // 'docente' es el nombre del atributo en la clase Salon
    private Salon salon; // Referencia al salón asignado

    public Docente(){

    }

    public Docente(Long identificacion, String nombre, String grupo, String tipoMateria) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.grupo = grupo;
        this.tipoMateria = tipoMateria;
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
    public String getGrupo() {
        return grupo;
    }
    public void setGrupo(String grupo) {
        this.grupo = grupo;
    }
    public String getTipoMateria() {
        return tipoMateria;
    }
    public void setTipoMateria(String tipoMateria) {
        this.tipoMateria = tipoMateria;
    }

    // Agregar getter y setter para la lista de estudiantes
    public List<Estudiante> getEstudiantes() {
        return estudiantes;
    }

    public void setEstudiantes(List<Estudiante> estudiantes) {
        this.estudiantes = estudiantes;
    }
    
    // Getter y setter para el salon
    public Salon getSalon() {
        return salon;
    }

    public void setSalon(Salon salon) {
        this.salon = salon;
    }
    
}

