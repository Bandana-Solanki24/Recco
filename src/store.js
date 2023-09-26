// Import statement.
import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./component/productSlice"; // Import your product slice

export const store = configureStore({
  reducer: {
    products: productReducer, // Add your product slice reducer
  },
});

// ReactDOM.render and Provider setup...
