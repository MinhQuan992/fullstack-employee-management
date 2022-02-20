import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { Employee } from "../App";
import { RootState } from "../app/store";

const employeeAdapter = createEntityAdapter<Employee>();

const initialState = employeeAdapter.getInitialState({
  loading: false,
});

export const getAllEmployees = createAsyncThunk(
  "employeeList/getAllEmployees",
  async () => {
    return [];
  }
);

export const employeeSlice = createSlice({
  name: "employeeList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllEmployees.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { selectAll: selectAllEmployees, selectById: selectEmployeeById } =
  employeeAdapter.getSelectors((state: RootState) => state.employeeList);

export default employeeSlice.reducer;
