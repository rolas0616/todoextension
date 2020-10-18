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
    <div className="container-center">
      <h2>Completed notes</h2>
      {
        notesComplete.length <= 0
        ? 
        <div>
          <p>No tasks completed</p>
          <img src="wrong.png" alt="wrong" width="150px"/>
        </div> 
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
