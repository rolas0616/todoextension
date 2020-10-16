import React, { useState } from 'react'
import shortid from 'shortid';

const Form = ({
  notes,
  setNotes,
  setIsVisibleForm
}) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const addNote = (e) => {
    e.preventDefault();
    if(!title.trim()) {
      setError('Campo obligatorio')
      return;
    }
    setNotes([
      {id: shortid.generate() , content: title, complete: true},
      ...notes
    ]);
    setTitle('');
    setIsVisibleForm(false);
  }
  return (
    <>
    <form onSubmit={addNote} >
      <input
        type="text"
        placeholder="Ingresa una tarea"
        onChange={(e) => setTitle(e.target.value)}
        name="title"
      />
      <button
        type="submit"
        >
        Guardar
      </button>
      {
        error ? <p>{error}</p> : null
      }
    </form>
    </>
  )
}

export default Form;
