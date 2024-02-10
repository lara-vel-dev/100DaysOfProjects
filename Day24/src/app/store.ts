import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "../features/tasks/artistSlice";

export const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});
