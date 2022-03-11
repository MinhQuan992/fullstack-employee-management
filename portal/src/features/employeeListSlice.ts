import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Employee } from "../App";
import { RootState } from "../app/store";
import EmployeeService, {
  EmployeeAddObject,
} from "../services/EmployeeService";

const employeeAdapter = createEntityAdapter<Employee>();

const initialState = employeeAdapter.getInitialState({
  loading: false,
  showPopup: false,
});

export const getAllEmployees = createAsyncThunk(
  "employeeList/getAllEmployees",
  async () => {
    return await EmployeeService.getAllEmployees();
  }
);

export const addNewEmployee = createAsyncThunk(
  "employeeList/addNewEmployee",
  async (employee: EmployeeAddObject) => {
    return await EmployeeService.addNewEmployee(employee);
  }
);

export const updateEmployee = createAsyncThunk(
  "employeeList/updateEmployee",
  async (employee: Employee) => {
    return await EmployeeService.updateEmployee(employee);
  }
);

export const deleteEmployee = createAsyncThunk(
  "employeeList/deleteEmployee",
  async (employeeId: number) => {
    return await EmployeeService.deleteEmployee(employeeId);
  }
);

export const employeeSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: {
    changePopupState: (state) => {
      state.showPopup = !state.showPopup;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllEmployees.fulfilled, (state, action) => {
        employeeAdapter.setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(addNewEmployee.fulfilled, (state, action) => {
        employeeAdapter.addOne(state, action.payload);
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        const newEmployee = action.payload;
        state.entities[newEmployee.id] = newEmployee;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        employeeAdapter.removeOne(state, action.payload);
      });
  },
});

export const { selectAll: selectAllEmployees, selectById: selectEmployeeById } =
  employeeAdapter.getSelectors((state: RootState) => state.employeeList);
export const { changePopupState } = employeeSlice.actions;
export default employeeSlice.reducer;
