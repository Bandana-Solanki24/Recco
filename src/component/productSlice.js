// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    productStatuses: [], // Initial state for product statuses
  },
  reducers: {
    updateStatus: (state, action) => {
      const { index, newStatus } = action.payload;
      // Update the status of the product at the specified index
      state.productStatuses[index] = newStatus;
    },
  },
});

export const { updateStatus } = productSlice.actions;
export default productSlice.reducer;
