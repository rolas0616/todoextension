import React from 'react'

const Note = ({
  note,
  setNotes,
  notes,
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
