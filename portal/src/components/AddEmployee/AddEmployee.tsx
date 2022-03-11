import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Employee } from "../../App";
import {
  addNewEmployee,
  updateEmployee,
} from "../../features/employeeListSlice";
import employeePicture from "../../images/employee.jpg";
import EmployeeService, {
  EmployeeAddObject,
} from "../../services/EmployeeService";
import "./AddEmployee.style.css";

const AddEmployee = () => {
  const [employee, setEmployee] = useState<Employee>();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const addEmployee = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const employee: EmployeeAddObject = {
      firstName,
      lastName,
      email,
    };
    dispatch(addNewEmployee(employee));
    navigate(-1);
  };

  const editEmployee = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (typeof id === "undefined") {
      return;
    }
    const idInNum = parseInt(id);
    const employee: Employee = {
      id: idInNum,
      firstName,
      lastName,
      email,
    };
    dispatch(updateEmployee(employee));
    navigate(-1);
  };

  useEffect(() => {
    const fetchEmployee = async () => {
      if (window.location.pathname === "/add-employee") {
        return;
      }

      const fetchedEmployee = await EmployeeService.getOneEmployee(id);
      if (!fetchedEmployee) {
        return;
      }

      setEmployee(fetchedEmployee);
      setFirstName(fetchedEmployee.firstName);
      setLastName(fetchedEmployee.lastName);
      setEmail(fetchedEmployee.email);
    };
    fetchEmployee();
  }, []);

  return (
    <div className="bg-indigo-200">
      <div className="flex">
        <img
          className="w-2/4"
          src={employeePicture}
          alt="Employee"
          title="Employee"
        ></img>
        <div className="container">
          {!employee && window.location.pathname === `/edit-employee/${id}` ? (
            <div>
              <h2 className="page-title text-9xl pb-16 lg:pt-20 md:pt-5">
                404
              </h2>
              <h3 className="text-center text-4xl">Employee Not Found</h3>
              <button
                className="btn bg-indigo-700 mt-4"
                onClick={() => navigate("/")}
              >
                Go back
              </button>
            </div>
          ) : (
            <div className="row-span-full">
              {window.location.pathname === `/add-employee` ? (
                <h2 className="page-title text-5xl pb-10 pt-8">Add Employee</h2>
              ) : (
                <h2 className="page-title text-5xl pb-10 pt-8">
                  Edit Employee
                </h2>
              )}
              <form>
                <div className="mb-6">
                  <label htmlFor="firstName" className="field-name">
                    Your First Name
                  </label>
                  <input
                    type="text"
                    className="text-box"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="lastName" className="field-name">
                    Your Last Name
                  </label>
                  <input
                    type="text"
                    className="text-box"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="field-name">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="text-box"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </form>

              <button
                className="btn bg-indigo-700 "
                onClick={(e) => {
                  if (window.location.pathname === "/add-employee") {
                    addEmployee(e);
                  } else {
                    editEmployee(e);
                  }
                }}
              >
                Submit
              </button>
              <button
                className="btn bg-red-700 ml-2"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
