import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosAPI from "../../service/api";

const setAuthHeader = (token) => {
  axiosAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axiosAPI.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const response = await axiosAPI.post("/user/register", values);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const response = await axiosAPI.post("/user/login", values);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axiosAPI.post("/user/logout");
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
