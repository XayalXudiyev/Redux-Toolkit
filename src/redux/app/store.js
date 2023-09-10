// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from './../features/counter/counterSlice'

// export const store = configureStore({
//     reducer: {
//      counter : counterReducer 
//     }
// })

// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import notesReducer from '../features/notesSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
