import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import EmployeeList from "./components/EmployeeList";
import { selectAllEmployees } from "./features/employeeListSlice";

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

function App() {
  const employees = useSelector((state: RootState) =>
    selectAllEmployees(state)
  );
  const loading = useSelector((state: RootState) => state.employeeList.loading);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {/* {employees.length > 0 ? (
        <EmployeeList employees={employees} />
      ) : (
        <p>No Employees</p>
      )} */}
      <h1 className="text-indigo-400 text-center text-5xl font-bold p-4">List Employees</h1>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
