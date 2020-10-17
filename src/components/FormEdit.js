import React, { useState, useEffect } from 'react'

const FormEdit = ({
  currentNote,
  notes,
  setNotes,
  setIsVisibleForm,
}) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    const note = notes.filter(note => note.id === currentNote);
    setTitle(note[0]['content'])
  }, [notes, currentNote]);
  const editNone = (e) => {
    e.preventDefault();
    if(!title.trim()) {
      setError('Campo obligatorio')
      return;
    }
    setNotes(
      notes.map(note => note.id === currentNote ? {id: note.id, content:title, complete: true} : note)
    )
    setIsVisibleForm(false);
  }
  return (
    <>
    <form onSubmit={editNone} >
      <input
        type="text"
        placeholder="Editar nota"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button
        type="submit"
        >
        Guardar
      </button>
      <button onClick={() => setIsVisibleForm(false)}>Cancelar</button>
      {
        error ? <p>{error}</p> : null
      }
    </form>
    </>
  )
}

export default FormEdit;
