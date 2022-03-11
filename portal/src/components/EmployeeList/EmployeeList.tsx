import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Employee } from "../../App";
import { RootState } from "../../app/store";
import { changePopupState } from "../../features/employeeListSlice";
import PopupDialog from "../PopupDialog/PopupDialog";
import "./EmployeeList.style.css";

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {  
  const [employeeId, setEmployeeId] = useState(0);
  const showPopup = useSelector((state: RootState) => state.employeeList.showPopup);
  const dispatch = useDispatch();

  return (
    <div className="mt-4">
      <div className="container">
        <table className="tbl">
          <thead className="bg-indigo-400 flex w-full">
            <tr className="flex w-full">
              <th className="border-r lg:w-20 sm:w-10">ID</th>
              <th className="border-r lg:w-56 sm:w-28">First Name</th>
              <th className="border-r lg:w-72 sm:w-36">Last Name</th>
              <th className="border-r lg:w-72 sm:w-36">Email</th>
              <th className="lg:w-56 sm:w-28">Actions</th>
            </tr>
          </thead>

          <tbody className="flex w-full flex-col overflow-y-scroll h-96">
            {employees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b bg-indigo-100 flex w-full"
              >
                <td className="text-center border-r lg:w-20 sm:w-10 table-cell">
                  {employee.id}
                </td>
                <td className="border-r pl-2 lg:w-56 sm:w-28 table-cell">
                  {employee.firstName}
                </td>
                <td className="border-r pl-2 lg:w-72 sm:w-36 table-cell">
                  {employee.lastName}
                </td>
                <td className="border-r pl-2 lg:w-72 sm:w-36 table-cell">
                  {employee.email}
                </td>
                <td className="lg:w-56 sm:w-28 table-cell">
                  <div className="container">
                    <div>
                      <Link to={`edit-employee/${employee.id}`}>
                        <i className="fa-solid fa-pen-to-square"></i>
                      </Link>
                      <i
                        className="fa-solid fa-trash ml-10 hover:cursor-pointer"
                        onClick={() => {
                          dispatch(changePopupState());
                          setEmployeeId(employee.id);
                        }}
                      ></i>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      { showPopup && <PopupDialog employeeId={employeeId} /> }
    </div>
  );
};

export default EmployeeList;
