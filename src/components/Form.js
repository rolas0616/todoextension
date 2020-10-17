import React, { useState } from 'react'
import shortid from 'shortid';

const Form = ({
  notes,
  setIsVisibleForm,
  setNotes,
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
      {id: shortid.generate() , content: title, complete: false},
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
        placeholder="Agrega una tarea"
        onChange={(e) => setTitle(e.target.value)}
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

export default Form;
