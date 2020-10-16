import React, { useState } from 'react'
import Form from '../components/Form';
import Note from '../components/Note';

const Todo = () => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [notes, setNotes] = useState([
    {
      id : '1',
      content : 'note 1',
      complete : false,
    },
    {
      id : '2',
      content : 'note 2',
      complete : false,
    },
    {
      id : '3',
      content : 'note 3',
      complete : false,
    },
  ]);
  return (
    <div>
      {
        isVisibleForm ? (
          <>
            <h2>Agregar tarea</h2>
            <Form
              notes = { notes }
              setNotes = { setNotes }
              setIsVisibleForm = { setIsVisibleForm }
            />
          </>
        ) : null
      }
      {
        !isVisibleForm ? <h2>Tus tareas</h2> : null
      }
      {
        !isVisibleForm ? (
          notes.length === 0 ? <p>Agrega una nota</p>
          :
          notes.map((note) => (
            <Note
              key = { note.id }
              note = { note }
              setNotes = { setNotes }
              notes = { notes }
            />
          ))
        ) : null
      }
      <br/>
      {
        !isVisibleForm ? (
          <button
            type="button"
            onClick={ () => setIsVisibleForm(true) }
          >
            + Agregar nota
          </button>
        ) : null
      }
    </div>
  )
}

export default Todo;
