package com.jardin.ami_sas.modelos;

//import java.util.Set;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.JoinTable;
// import jakarta.persistence.ManyToMany;
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

    public Estudiante() {
    }
    
    //  @ManyToMany
    //  @JoinTable(
    //              name = "estudiantes_docentes",
    //              joinColumns = @JoinColumn(name = "estudiantes_identificacion"),
    //              inverseJoinColumns = @JoinColumn(name = "docentes_id")
    //      )
    //      private Set<Docente> docentes;
    
    

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

    // @OneToMany(mappedBy = "libro") // dominante de la relación
    // @JsonManagedReference // serializar/deserializar
    // private List<Prestamo> prestamos;

    
}


