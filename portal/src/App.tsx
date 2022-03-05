import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { RootState } from "./app/store";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import Footer from "./components/Footer/Footer";
import { CSSProperties } from "react";
import {
  getAllEmployees,
  selectAllEmployees,
} from "./features/employeeListSlice";

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const iconStyle: CSSProperties = {
    color: "white",
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className="text-indigo-400 text-center sm:text-4xl md:text-5xl lg:text-5xl font-bold p-4">
                List Employees
              </h1>
              <Link
                to="/add-employee"
                className="md:ml-32 lg:ml-40 w-fit bg-indigo-400 rounded-md px-4 py-2"
              >
                <i
                  className="fa-solid fa-user-plus pr-1 pb-2 h-0"
                  style={iconStyle}
                ></i>
                <span className="text-white">Add Employee</span>
              </Link>
              <br />
              {loading && <p className="ml-40">Loading...</p>}
              {employees.length > 0 ? (
                <EmployeeList employees={employees} />
              ) : (
                <p>No Employees</p>
              )}
            </>
          }
        ></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
