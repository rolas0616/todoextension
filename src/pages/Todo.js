import React, { useState } from 'react'
import Form from '../components/Form';
import FormEdit from '../components/FormEdit';
import Note from '../components/Note';

const Todo = ({
  notes,
  setNotes,
  notesComplete,
  setNotesComplete
}) => {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [currentNote, setCurrentNote] = useState('');
  return (
    <div>
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
              setIsEdit = { setIsEdit }
              notes = { notes }
              setIsVisibleForm = { setIsVisibleForm }
              setCurrentNote={setCurrentNote}
              notesComplete={notesComplete}s
              setNotesComplete={setNotesComplete}
            />
          ))
        ) : null
      }
      <br/>
      {
        !isVisibleForm ? (
          <button
            type="button"
            onClick={ () => [setIsVisibleForm(true), setIsEdit(false)] }
          >
            + Agregar nota
          </button>
        ) : null
      }
      {
        isVisibleForm ? (
          <>
            <h2>
              {
                isEdit ? 'Editar nota' : 'Agregar nota'
              }
            </h2>
              {
                isEdit ? (
                  <FormEdit
                    currentNote={currentNote}
                    notes={notes}
                    setNotes={setNotes}
                    setIsVisibleForm={setIsVisibleForm}
                  />
                ) : (
                  <Form
                    notes = { notes }
                    setIsVisibleForm = { setIsVisibleForm }
                    setNotes = { setNotes }
                  />
                )
              }
          </>
        ) : null
      }
    </div>
  )
}

export default Todo;
