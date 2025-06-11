package com.jardin.ami_sas.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "salones")
public class Salon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numeroSalon;
    private String tipoClase;
    
    // @ManyToOne
    // @JoinColumn(name = "docente_id")
    // private Docente docente;

    Salon(){

    }    
    public Salon(Long numeroSalon, String tipoClase, Docente docente) {
        this.numeroSalon = numeroSalon;
        this.tipoClase = tipoClase;
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
    
}
