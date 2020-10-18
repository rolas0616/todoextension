import React from 'react';
import '../styles/Note.css';

const Note = ({
  note,
  setNotes,
  notes,
  setIsVisibleForm,
  setIsEdit,
  setCurrentNote,
  setNotesComplete,
  notesComplete,
}) => {

  const deleteNote = (noteId) => {
    const updateNotes = notes.filter(note => note.id !== noteId);
    setNotes(updateNotes);
  }

  const addCompleteNote = (currentNote) => {
    setNotesComplete([
      {id:currentNote.id, content:currentNote.content, complete:true},
      ...notesComplete
    ])
    note.complete = true;
    const updateNotes = notes.filter(note => note.id !== currentNote.id);
    setTimeout(() => {
      setNotes(updateNotes);
    }, 500);
  }

  return (
    <div className="container-left">
      <input
        onChange={() => {}}
        className="check"
        checked={note.complete}
        type="checkbox"
        onClick={() => addCompleteNote(note)}
      />
      <label className="text"> {note.content} </label>

      <button
        className="options"
        type="button"
        onClick={() => [setIsVisibleForm(true), setIsEdit(true), setCurrentNote(note.id)]}
      >
        ✎
      </button>
      <button
        className="options"
        type="button"
        onClick={() => deleteNote(note.id)}
      >
        ✘
      </button>

    </div>
  )
}

export default Note;
