package org.example.management.controller;

import lombok.RequiredArgsConstructor;
import org.example.management.framework.api.EmployeeAPI;
import org.example.management.framework.dto.EmployeeAddAndUpdateParams;
import org.example.management.model.Employee;
import org.example.management.service.EmployeeService;
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

  @Override
  public ResponseEntity<Employee> addNewEmployee(EmployeeAddAndUpdateParams params) {
    return ResponseEntity.ok(employeeService.addNewEmployee(params));
  }

  @Override
  public ResponseEntity<Employee> getOneEmployee(String employeeId) {
    return ResponseEntity.ok(employeeService.getOneEmployee(employeeId));
  }

  @Override
  public ResponseEntity<Employee> updateEmployee(String employeeId, EmployeeAddAndUpdateParams params) {
    return ResponseEntity.ok(employeeService.updateEmployee(employeeId, params));
  }
}
