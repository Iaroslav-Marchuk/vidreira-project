import { createSlice } from "@reduxjs/toolkit";
import { login, logout, register } from "./operations.js";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      role: null,
    },

    isLoggedIn: true,
    isRefreshing: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = { name: null, role: null };
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
