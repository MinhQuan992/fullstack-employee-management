import React from "react";
import { useDispatch } from "react-redux";
import {
  changePopupState,
  deleteEmployee,
} from "../../features/employeeListSlice";
import "./PopupDialog.style.css";

export interface PopupDialogProps {
  employeeId: number;
}

const PopupDialog: React.FC<PopupDialogProps> = ({ employeeId }) => {
  const dispatch = useDispatch();

  return (
    <div className="popup-background">
      <div className="popup-container">
        <div className="popup">
          <div className="popup-inner container">
            <i className="fa-solid fa-circle-exclamation fa-5x"></i>
            <p className="font-bold text-3xl mt-2">Are you sure?</p>
            <p>Are you sure to delete this employee?</p>
            <br />
            <div>
              <button
                className="dialog-btn bg-red-600"
                onClick={() => {
                  dispatch(deleteEmployee(employeeId));
                  dispatch(changePopupState());
                }}
              >
                Yes
              </button>
              <button
                className="dialog-btn bg-slate-600 ml-4"
                onClick={() => dispatch(changePopupState())}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDialog;
