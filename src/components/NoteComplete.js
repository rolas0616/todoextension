import React from 'react';

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
    <div>
      <input
        type="checkbox"
        checked={note.complete}
        onChange={() => quitCompleteNote(note) }
      />
      <label> {note.content} </label>
      <button onClick={() => deleteNote(note.id)}>
        eliminar
      </button>
    </div>
  )
}

export default NoteComplete;
