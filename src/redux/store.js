import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // path as per your project

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
