import { configureStore } from "@reduxjs/toolkit";
import ordersReducer from "./orders/slice";
import authReducer from "./auth/slice";

export const store = configureStore({
  reducer: {
    orders: ordersReducer,
    auth: authReducer,
  },
});
