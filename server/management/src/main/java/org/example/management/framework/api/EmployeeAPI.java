package org.example.management.framework.api;

import org.example.management.framework.dto.EmployeeAddAndUpdateParams;
import org.example.management.model.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RequestMapping("/employees")
@Validated
public interface EmployeeAPI {
  @GetMapping
  ResponseEntity<List<Employee>> getAllEmployees();

  @PostMapping
  ResponseEntity<Employee> addNewEmployee(@RequestBody @Valid EmployeeAddAndUpdateParams params);

  @GetMapping("/{employeeId}")
  ResponseEntity<Employee> getOneEmployee(@PathVariable String employeeId);

  @PutMapping("/{employeeId}")
  ResponseEntity<Employee> updateEmployee(
      @PathVariable String employeeId, @RequestBody @Valid EmployeeAddAndUpdateParams params);

  @DeleteMapping("/{employeeId}")
  ResponseEntity<HttpStatus> deleteEmployee(@PathVariable String employeeId);
}
