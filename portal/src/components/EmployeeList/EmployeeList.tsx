import React from "react";
import { Employee } from "../../App";
import "./EmployeeList.style.css";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className="container">
      <table className="tbl">
        <thead className="bg-indigo-400">
          <tr>
            <th className="border-r">ID</th>
            <th className="border-r">First Name</th>
            <th className="border-r">Last Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="border-b bg-indigo-100">
              <td className="text-center border-r">{employee.id}</td>
              <td className="border-r pl-2">{employee.firstName}</td>
              <td className="border-r pl-2">{employee.lastName}</td>
              <td className="border-r pl-2">{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
