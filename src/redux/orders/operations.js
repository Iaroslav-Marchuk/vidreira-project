import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://luck-plume-ease.glitch.me";

export const fetchOrders = createAsyncThunk(
  "orders/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/orders");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addOrder = createAsyncThunk(
  "orders/addOrder",
  async (
    {
      local: { zona, operator, date },
      EP,
      cliente,
      units: [
        { categoria, type, temper, sizeX, sizeY, sizeZ, quantity, reason },
      ],
    },
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/orders", {
        local: { zona, operator, date },
        EP,
        cliente,
        units: [
          { categoria, type, temper, sizeX, sizeY, sizeZ, quantity, reason },
        ],
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/orders/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
