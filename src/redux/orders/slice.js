import { createSlice } from "@reduxjs/toolkit";
import { fetchOrders, addOrder, deleteOrder } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, handlePending)
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchOrders.rejected, handleRejected)

      .addCase(addOrder.pending, handlePending)
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addOrder.rejected, handleRejected)

      .addCase(deleteOrder.pending, handlePending)
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(deleteOrder.rejected, handleRejected);
  },
});

export default ordersSlice.reducer;

export const selectOrders = (state) => state.orders.items;
export const selectLoading = (state) => state.orders.loading;
export const selectError = (state) => state.orders.error;
