package org.example.management.controller;

import org.example.management.framework.api.EmployeeAPI;
import org.example.management.model.Employee;
import org.example.management.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class EmployeeController implements EmployeeAPI {
  private final EmployeeService employeeService;

  @Override
  public ResponseEntity<List<Employee>> getAllEmployees() {
    return ResponseEntity.ok(employeeService.getAllEmployees());
  }
}
