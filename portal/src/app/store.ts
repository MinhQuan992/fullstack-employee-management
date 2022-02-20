import { configureStore } from "@reduxjs/toolkit";
import employeeListReducer from "../features/employeeListSlice";

export const store = configureStore({
  reducer: {
      employeeList: employeeListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
