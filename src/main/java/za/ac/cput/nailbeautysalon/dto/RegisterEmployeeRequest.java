package za.ac.cput.nailbeautysalon.dto;

public record RegisterEmployeeRequest(String firstName, String lastName, String email, String cellNumber, String employeeRole, String password) {
}

