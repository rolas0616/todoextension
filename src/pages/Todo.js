import React, { useState } from 'react'

const Todo = () => {
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
  ])
  return (
    <div>
      <h2>Tus tareas</h2>
      {
        notes.length === 0 
        ?
        <p>Agrega una nota</p>
        :
        notes.map((note) => (
          <div key={ note.id }>
            <p> <input type="checkbox"/> {note.content} </p>
            <button type="button"> editar </button>
            <button type="button"> eliminar </button>
          </div>
        ))
      }
      <br/>
      <button type="button">
        + Agregar nota
      </button>
    </div>
  )
}

export default Todo;
