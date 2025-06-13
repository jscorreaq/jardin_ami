package com.jardin.ami_sas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.jardin.ami_sas.repositorios") 
//@EntityScan(basePackages = "com.jardin.ami_sas.modelos") 

public class AmiSasApplication {

	public static void main(String[] args) {
		SpringApplication.run(AmiSasApplication.class, args);
	}

}

