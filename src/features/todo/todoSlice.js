// src/features/todo/todoSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }),
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    updateTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.text = newText;
        task.updatedAt = new Date().toISOString();
      }
    },
    clearAllTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, toggleTask, updateTask, clearAllTasks } = todoSlice.actions;
export default todoSlice.reducer;
