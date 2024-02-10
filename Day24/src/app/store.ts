import { configureStore } from "@reduxjs/toolkit";
import artistReducer from "../features/artists/artistSlice";

export const store = configureStore({
  reducer: {
    artists: artistReducer,
  },
});
