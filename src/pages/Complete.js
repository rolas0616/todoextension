import React from 'react'
import NoteComplete from '../components/NoteComplete';

const Complete = ({
  notesComplete,
  setNotesComplete,
}) => {
  return (
    <div>
      <h2>Tareas completadas</h2>
      {
        notesComplete.map((note) => (
          <NoteComplete
            key={note.id}
            note={note}
            setNotesComplete={setNotesComplete}
            notesComplete={notesComplete}
          />
        ))
      }
    </div>
  )
}

export default Complete;
