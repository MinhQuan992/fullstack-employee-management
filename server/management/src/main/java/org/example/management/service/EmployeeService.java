package org.example.management.service;

import org.example.management.exception.NoContentException;
import org.example.management.model.Employee;
import org.example.management.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {
  private final EmployeeRepository employeeRepository;

  public List<Employee> getAllEmployees() {
    List<Employee> employees = employeeRepository.findAll();
    if (employees.isEmpty()) {
      throw new NoContentException();
    }
    return employees;
  }
}
