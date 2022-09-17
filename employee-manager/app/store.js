import { configureStore } from "@reduxjs/toolkit";
import EmployeeListReducer from "../slices/employeesSlice";

export const store = configureStore({
  reducer: {
    employees: EmployeeListReducer,
  },
});
