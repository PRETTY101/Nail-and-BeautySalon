package za.ac.cput.nailbeautysalon.domain;

import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "accounts")
public class Account implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;

    /** Links this credential to Employee.userId or Customer.userId */
    @Column(name = "user_id")
    private String userId;

    protected Account() {}

    private Account(Builder b) {
        this.username = b.username;
        this.password = b.password;
        this.role     = b.role;
        this.userId   = b.userId;
    }

    // ===== UserDetails contract =====
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override public String  getPassword()             { return password; }
    @Override public String  getUsername()             { return username; }
    @Override public boolean isAccountNonExpired()     { return true;   }
    @Override public boolean isAccountNonLocked()      { return true;   }
    @Override public boolean isCredentialsNonExpired() { return true;   }
    @Override public boolean isEnabled()               { return true;   }

    // ===== Getters =====
    public Long   getId()     { return id; }
    public Role   getRole()   { return role; }
    public String getUserId() { return userId; }

    // ===== Setters =====
    public void setPassword(String password) { this.password = password; }
    public void setUsername(String username) { this.username = username; }
    public void setRole(Role role)           { this.role = role; }
    public void setUserId(String userId)     { this.userId = userId; }

    @Override
    public String toString() {
        return "Account{id=" + id + ", username='" + username + "', role=" + role + "}";
    }

    // ===== Builder =====
    public static class Builder {
        private String username;
        private String password;
        private Role   role;
        private String userId;

        public Builder setUsername(String username) { this.username = username; return this; }
        public Builder setPassword(String password) { this.password = password; return this; }
        public Builder setRole(Role role)           { this.role = role;         return this; }
        public Builder setUserId(String userId)     { this.userId = userId;     return this; }

        public Account build() { return new Account(this); }
    }
}