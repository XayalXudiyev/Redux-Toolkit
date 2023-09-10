// src/features/notesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    editNote: (state, action) => {
      const { id, newText } = action.payload;
      const noteToEdit = state.notes.find((note) => note.id === id);
      if (noteToEdit) {
        noteToEdit.text = newText;
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
