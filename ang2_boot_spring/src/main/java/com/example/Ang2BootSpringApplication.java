package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@SpringBootApplication
@EnableJpaRepositories
@EnableCaching
public class Ang2BootSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(Ang2BootSpringApplication.class, args);
	}
}
