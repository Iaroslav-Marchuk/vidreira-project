import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    value: "",
  },

  reducers: {
    changefilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changefilter } = filterSlice.actions;
