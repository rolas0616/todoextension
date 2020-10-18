import React, { useState } from 'react'
import shortid from 'shortid';
import '../styles/Form.css';

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
      setError('Required field')
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
        placeholder="Describe yout note"
        onChange={(e) => setTitle(e.target.value)}
        className="input"
      />
      {
        error ? <p className="error">{error}</p> : null
      }
      <button
        type="submit"
        className="button-primary"
        >
        Save
      </button>
      <button className="button-secondary" onClick={() => setIsVisibleForm(false)}>Cancel</button>
    </form>
    </>
  )
}

export default Form;
