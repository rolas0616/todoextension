import React from 'react'

const Note = ({
  note,
  setNotes,
  notes,
  setIsVisibleForm,
  setIsEdit,
  setCurrentNote,
}) => {

  const deleteNote = (noteId) => {
    const updateNotes = notes.filter(note => note.id !== noteId);
    setNotes(updateNotes);
  }

  return (
    <div>
      <p><input type="checkbox"/>{note.content}</p>
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
