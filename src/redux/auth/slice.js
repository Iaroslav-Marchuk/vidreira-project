import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      username: "",
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
});

export default authSlice.reducer;
