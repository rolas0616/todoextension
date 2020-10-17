import React from 'react'
import NoteComplete from '../components/NoteComplete';

const Complete = ({
  notesComplete,
  setNotesComplete,
  setNotes,
  notes,
  setScreen,
}) => {
  return (
    <div>
      <h2>Tareas completadas</h2>
      {
        notesComplete.length <= 0 
        ? 
        <p>No hay tareas completadas</p> 
        :
        (notesComplete.map((note) => (
          <NoteComplete
            key={note.id}
            note={note}
            setNotesComplete={setNotesComplete}
            notesComplete={notesComplete}
            setNotes={setNotes}
            notes={notes}
            setScreen={setScreen}
          />
        )))
      }
    </div>
  )
}

export default Complete;
