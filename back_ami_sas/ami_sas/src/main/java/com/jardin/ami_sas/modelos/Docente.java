package com.jardin.ami_sas.modelos;

//import java.util.List;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.ManyToMany;
//import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "docentes")
public class Docente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long identificacion;
    private String nombre;
    private String grupo;
    private String tipoMateria;

    //relacion mucho a muchos con estudiante
    // @ManyToMany(mappedBy = "docente") // dominante de la relación
    // @JsonManagedReference // serializar/deserializar
    // private List<Estudiante> estudiantes;
    
     // Relación de uno a varios con salon
    // @OneToMany(mappedBy = "docente") // dominante de la relación
    // @JsonManagedReference // serializar/deserializar
    // private List<Salon> prestamos;

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


    
}

