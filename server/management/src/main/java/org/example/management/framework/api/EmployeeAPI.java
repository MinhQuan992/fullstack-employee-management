package org.example.management.framework.api;

import org.example.management.model.Employee;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RequestMapping("/employees")
@Validated
public interface EmployeeAPI {
  @GetMapping
  ResponseEntity<List<Employee>> getAllEmployees();
}
