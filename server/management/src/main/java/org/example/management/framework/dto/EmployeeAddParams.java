package org.example.management.framework.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeAddParams {
  @NotBlank(message = "The first name is required")
  String firstName;

  @NotBlank(message = "The last name is required")
  String lastName;

  @NotBlank(message = "The email is required")
  String email;
}
