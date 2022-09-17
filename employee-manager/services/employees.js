import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";

export const getEmployees = createAsyncThunk(
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

export const addEmployee = createAsyncThunk(
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

export const editEmployee = createAsyncThunk(
  "employee/edit",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, data } = payload;
      const response = await fetch(`${BASE_URL}/employee/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return { id, data: result };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteEmployee = createAsyncThunk(
  "employee/delete",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/employee/${payload}`, {
        method: "DELETE",
      });
      const result = await response.json();
      return result._id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getEmployee = createAsyncThunk(
  "employee/single",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/employee/${payload}`);
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
