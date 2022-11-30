import { configureStore } from "@reduxjs/toolkit";
import EmployeeListReducer from "../slices/employeesSlice";

export const store = configureStore({
  reducer: {
    employees: EmployeeListReducer,
  },
});

// Infer the application global state and dispatch types from store
export type ApplicationState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
