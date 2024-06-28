package com.nekol;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
public class ZeelgramBeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ZeelgramBeApplication.class, args);
	}

}
