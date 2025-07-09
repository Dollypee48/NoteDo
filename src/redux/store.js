// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import todoReducer from "../features/todo/todoSlice";
import notepadReducer from "../features/notepad/notepadSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    todo: todoReducer,
    notepad: notepadReducer,
  },
});
