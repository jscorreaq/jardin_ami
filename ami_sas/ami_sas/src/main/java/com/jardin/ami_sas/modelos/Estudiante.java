package com.jardin.ami_sas.modelos;

//import java.util.Set;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
// import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;


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


