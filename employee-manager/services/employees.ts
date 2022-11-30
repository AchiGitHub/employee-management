import { createAsyncThunk } from "@reduxjs/toolkit";
import { Employee } from "../common/types";
import { BASE_URL } from "../common/utils/constants";

export const getEmployees = createAsyncThunk<Employee[]>(
  "employee/list",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/employee`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addEmployee = createAsyncThunk<Employee, { data: Employee, callBack: () => void }>(
  "employee/add",
  async (payload, { rejectWithValue }) => {
    try {
      const { data, callBack } = payload;
      const response = await fetch(`${BASE_URL}/employee`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      callBack();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editEmployee = createAsyncThunk<{ id: string, data: Employee }, { id: string, data: Employee, callback: () => void }>(
  "employee/edit",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, data, callback } = payload;
      const response = await fetch(`${BASE_URL}/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      callback();
      return { id, data: result };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk<string, { userId: string, callback: () => void }>(
  "employee/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const { userId, callback } = payload;
      const response = await fetch(`${BASE_URL}/employee/${payload.userId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      callback();
      return result._id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getEmployee = createAsyncThunk<Employee, { id: string | string[] }>(
  "employee/single",
  async (payload, { rejectWithValue }) => {
    const { id } = payload;
    try {
      const response = await fetch(`${BASE_URL}/employee/${id}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
