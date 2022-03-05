import axios from "axios";

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
}

export default new EmployeeService();
