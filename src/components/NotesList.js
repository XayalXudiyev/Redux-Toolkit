// src/components/NotesList.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote } from '../redux/features/notesSlice';

function NotesList() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Notlar</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            {note.text}
            <button onClick={() => dispatch(deleteNote({ id: note.id }))}>
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
