import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../reducers/songReducer";

const store = configureStore({
  reducer: {
    playingSong: songReducer,
  },
});

export default store;
