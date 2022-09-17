import { createSlice } from "@reduxjs/toolkit";
import {
  addEmployee,
  deleteEmployee,
  editEmployee,
  getEmployee,
  getEmployees,
} from "../services/employees";

const initialState = {
  list: {
    loading: true,
    data: [],
    error: null,
    hasError: false,
  },
  employee: {
    loading: false,
    data: null,
    error: null,
    hasError: false,
  },
  selectedEmployee: {
    loading: true,
    data: null,
    error: null,
    hasError: false,
  },
};

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    resetState(state) {
      state.employee = { ...initialState.employee };
      state.selectedEmployee = { ...initialState.selectedEmployee }
    },
  },
  extraReducers: {
    [getEmployees.pending]: (state) => {
      state.list = { ...initialState.list };
    },
    [getEmployees.fulfilled]: (state, { payload }) => {
      state.list.loading = false;
      state.list.data = payload;
    },
    [getEmployees.rejected]: (state, { payload }) => {
      state.list.loading = false;
      state.list.data = [];
      state.list.error = payload;
      state.list.hasError = true;
    },
    [addEmployee.pending]: (state, { payload }) => {
      state.employee.loading = true
    },
    [addEmployee.fulfilled]: (state, { payload }) => {
      state.employee.loading = false;
      state.employee.data = payload;
      state.list.data.push(payload);
    },
    [addEmployee.rejected]: (state, { payload }) => {
      state.employee.loading = false;
      state.employee.error = payload;
      state.employee.hasError = true;
    },
    [editEmployee.pending]: (state, { payload }) => {
      state.employee.loading = true;
    },
    [editEmployee.fulfilled]: (state, { payload }) => {
      const { id, data } = payload;
      const editItemIndex = state.list.data.findIndex((item) => item.id === id);
      if (editItemIndex > -1) {
        state.list.data[editItemIndex] = data;
      }
      state.employee.loading = false;
      state.employee.data = payload;
    },
    [editEmployee.rejected]: (state, { payload }) => {
      state.employee.loading = false;
      state.employee.error = payload;
      state.employee.hasError = true;
    },
    [deleteEmployee.pending]: (state, { payload }) => {
      state.employee.loading = true;
    },
    [deleteEmployee.fulfilled]: (state, { payload }) => {
      const deleteIndex = state.list.data.findIndex(
        (item) => item._id === payload
      );
      if (deleteIndex > -1) {
        state.list.data.splice(deleteIndex, 1);
      }
      state.employee.loading = false;
      state.employee.data = null;
    },
    [deleteEmployee.rejected]: (state, { payload }) => {
      state.employee.loading = false;
      state.employee.error = payload;
      state.employee.hasError = true;
    },
    [getEmployee.pending]: (state, { payload }) => {
      state.selectedEmployee = { ...initialState.selectedEmployee };
    },
    [getEmployee.fulfilled]: (state, { payload }) => {
      state.selectedEmployee.loading = false;
      state.selectedEmployee.data = payload;
    },
    [getEmployee.rejected]: (state, { payload }) => {
      state.selectedEmployee.loading = false;
      state.selectedEmployee.data = [];
      state.selectedEmployee.error = payload;
      state.selectedEmployee.hasError = true;
    },
  },
});

export const { resetState } = employeesSlice.actions

export default employeesSlice.reducer;
