import React from 'react'

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

  const addCompleteNote = (curretNote) => {
    setNotesComplete([
      {id:curretNote.id, content:curretNote.content, complete:true},
      ...notesComplete
    ])
    const updateNotes = notes.filter(note => note.id !== curretNote.id);
    setNotes(updateNotes);
  }

  return (
    <div>
      <input 
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
