import React, { useState, useEffect } from 'react'
import '../styles/Form.css';

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
      setError('Required field')
      return;
    }
    setNotes(
      notes.map(note => note.id === currentNote ? {id: note.id, content:title, complete: false} : note)
    )
    setIsVisibleForm(false);
  }
  return (
    <>
    <form onSubmit={editNone}>
      <input
        type="text"
        placeholder="Editar nota"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="input"
      />
      {
        error ? <p className="error">{error}</p> : null
      }
      <button
        className="button-primary"
        type="submit"
      >
        Save
      </button>
      <button
        className="button-secondary" 
        onClick={() => setIsVisibleForm(false)}
      > 
        Cancel
      </button>
    </form>
    </>
  )
}

export default FormEdit;
