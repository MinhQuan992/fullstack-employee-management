import axios from "axios";
import { Employee } from "../App";

const BASE_URL = "http://localhost:8080/employees";

export interface EmployeeAddObject {
  firstName: string;
  lastName: string;
  email: string;
}

class EmployeeService {
  async getAllEmployees() {
    const response = await axios.get(BASE_URL);
    return await response.data;
  }
  async addNewEmployee(employee: EmployeeAddObject) {
    const response = await axios.post(BASE_URL, employee);
    return await response.data;
  }
  async getOneEmployee(id: string | undefined) {
    if (typeof id === "undefined") {
      return null;
    }
    try {
      const response = await axios.get(BASE_URL + `/${id}`);
      return await response.data;
    } catch (err) {
      return null;
    }
  }
  async updateEmployee(employee: Employee) {
    try {
      const response = await axios.put(BASE_URL + `/${employee.id}`, employee);
      return await response.data;
    } catch (err) {
      return null;
    }
  }
}

export default new EmployeeService();
