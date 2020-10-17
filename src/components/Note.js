import React from 'react';

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
    <div>
      <input
        checked={note.complete}
        type="checkbox"
        onClick={() => addCompleteNote(note)}
      />
      <label> {note.content} </label>
      <button
        type="button"
        onClick={() => [setIsVisibleForm(true), setIsEdit(true), setCurrentNote(note.id)]}
      >
        editar
      </button>
      <button
        type="button"
        onClick={() => deleteNote(note.id)}
      >
        eliminar
      </button>
    </div>
  )
}

export default Note;
