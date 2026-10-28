package za.ac.cput.nailbeautysalon.dto;

public record RegisterCustomerRequest(String firstName, String lastName, String email, String cellNumber, String password) {
}
