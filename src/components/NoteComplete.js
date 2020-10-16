import React from 'react';

const NoteComplete = ({
  note,
  notesComplete,
  setNotesComplete
}) => {
  return (
    <div>
      <input 
        type="checkbox"
        checked={true}
        onChange={() => {}}
      />
      <label> {note.content} </label>
    </div>
  )
}

export default NoteComplete;
