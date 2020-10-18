import React from 'react';
import '../styles/Note.css';

const NoteComplete = ({
  note,
  notes,
  notesComplete,
  setNotes,
  setNotesComplete,
  setScreen,
}) => {
  const quitCompleteNote = (currentNote) => {
    note.complete = false;
    setNotes([
      {id:currentNote.id, content:currentNote.content, complete:false},
      ...notes
    ])
    setTimeout(() => {
      const updateCompleteNotes = notesComplete.filter(note => note.id !== currentNote.id);
      setNotesComplete(updateCompleteNotes);
    }, 500);
  }

  const deleteNote = (noteId) => {
    const updateNotes = notesComplete.filter(note => note.id !== noteId);
    setNotesComplete(updateNotes);
  }
  return (
    <div className="container-left">
      <input
        className="check-complete"
        type="checkbox"
        checked={note.complete}
        onChange={() => quitCompleteNote(note) }
      />
      <label className="text"> {note.content} </label>
      <button
        className="options"
        onClick={() => deleteNote(note.id)}
        >
        ✘
      </button>
    </div>
  )
}

export default NoteComplete;
