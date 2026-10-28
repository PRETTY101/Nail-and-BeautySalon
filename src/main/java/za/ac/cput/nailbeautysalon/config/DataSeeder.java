package za.ac.cput.nailbeautysalon.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;
import za.ac.cput.nailbeautysalon.domain.Account;
import za.ac.cput.nailbeautysalon.domain.Role;
import za.ac.cput.nailbeautysalon.repository.AccountRepository;

@Configuration
public class DataSeeder {

    private static final Logger log = LoggerFactory.getLogger(DataSeeder.class);

    @Bean
    public CommandLineRunner seedAdmin(AccountRepository accountRepository,
                                       PasswordEncoder passwordEncoder) {
        return args -> {
            if (accountRepository.existsByUsername("vee@mycput.ac.za")) {
                log.info("Admin account already exists — skipping seed.");
                return;
            }
            Account admin = new Account.Builder()
                    .setUsername("admin")
                    .setPassword(passwordEncoder.encode("Login@2026"))
                    .setRole(Role.ROLE_ADMIN)
                    .build();
            accountRepository.save(admin);
            log.info("Seeded admin account: username='admin', password='admin123' — CHANGE IN PRODUCTION");
        };
    }

}