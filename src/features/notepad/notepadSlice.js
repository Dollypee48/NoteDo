// src/features/notepad/notepadSlice.js
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

const notepadSlice = createSlice({
  name: "notepad",
  initialState,
  reducers: {
    addNote: {
      reducer: (state, action) => {
        state.notes.push(action.payload);
      },
      prepare: (title, content) => ({
        payload: {
          id: nanoid(),
          title,
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }),
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
    },
    updateNote: (state, action) => {
      const { id, title, content } = action.payload;
      const note = state.notes.find((n) => n.id === id);
      if (note) {
        note.title = title;
        note.content = content;
        note.updatedAt = new Date().toISOString();
      }
    },
    clearAllNotes: (state) => {
      state.notes = [];
    },
  },
});

export const { addNote, deleteNote, updateNote, clearAllNotes } = notepadSlice.actions;
export default notepadSlice.reducer;
