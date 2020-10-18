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
    <div className="container-center">
      {
        !isVisibleForm ? <h2>Your Notes</h2> : null
      }
      {
        !isVisibleForm ? (
          notes.length === 0 ? (
            <div>
              <p>You don't have a note, Create one!</p>
              <img src="clipboard.png" alt="clipboard" width="150px"/>
            </div>
          )
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
      {
        !isVisibleForm ? (
          <button
            className="button-primary"
            type="button"
            onClick={ () => [setIsVisibleForm(true), setIsEdit(false)] }
          >
             Add note
          </button>
        ) : null
      }
      {
        isVisibleForm ? (
          <>
            <h2>
              {
                isEdit ? 'Edit note' : 'Add note'
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
