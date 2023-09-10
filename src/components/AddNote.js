// src/components/AddNote.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/features/notesSlice';

function AddNote() {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (noteText.trim()) {
      dispatch(addNote({ text: noteText, id: Date.now() }));
      setNoteText('');
    }
  };

  return (
    <div>
      <h2>Not Ekle</h2>
      <textarea
        rows="4"
        cols="50"
        placeholder="Notunuzu buraya yazın"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      ></textarea>
      <button onClick={handleAddNote}>Ekle</button>
    </div>
  );
}

export default AddNote;
