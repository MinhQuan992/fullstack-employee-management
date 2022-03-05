package org.example.management.controller;

import org.example.management.framework.api.EmployeeAPI;
import org.example.management.framework.dto.EmployeeAddParams;
import org.example.management.model.Employee;
import org.example.management.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequiredArgsConstructor
public class EmployeeController implements EmployeeAPI {
  private final EmployeeService employeeService;

  @Override
  public ResponseEntity<List<Employee>> getAllEmployees() {
    return ResponseEntity.ok(employeeService.getAllEmployees());
  }

  @Override
  public ResponseEntity<Employee> addNewEmployee(EmployeeAddParams params) {
    return ResponseEntity.ok(employeeService.addNewEmployee(params));
  }
}
