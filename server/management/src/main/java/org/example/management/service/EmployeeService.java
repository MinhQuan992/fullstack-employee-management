package org.example.management.service;

import org.example.management.exception.NoContentException;
import org.example.management.exception.ResourceNotFoundException;
import org.example.management.framework.dto.EmployeeAddAndUpdateParams;
import org.example.management.model.Employee;
import org.example.management.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

  public Employee addNewEmployee(EmployeeAddAndUpdateParams params) {
    Employee employee = new Employee();
    employee.setFirstName(params.getFirstName());
    employee.setLastName(params.getLastName());
    employee.setEmail(params.getEmail());

    return employeeRepository.save(employee);
  }

  public Employee getOneEmployee(String employeeId) {
    Optional<Employee> employeeOptional = employeeRepository.findById(Long.parseLong(employeeId));
    return employeeOptional.orElseThrow(() -> new ResourceNotFoundException("Employee Not Found"));
  }

  public Employee updateEmployee(String employeeId, EmployeeAddAndUpdateParams params) {
    Employee employee = getOneEmployee(employeeId);

    employee.setFirstName(params.getFirstName());
    employee.setLastName(params.getLastName());
    employee.setEmail(params.getEmail());

    return employeeRepository.save(employee);
  }
}
