import React from 'react';

const NoteComplete = ({
  note,
  notes,
  notesComplete,
  setNotes,
  setNotesComplete,
  setScreen,
}) => {
  const quitCompleteNote = (currentNote) => {
    const updateCompleteNotes = notesComplete.filter(note => note.id !== currentNote.id);
    setNotesComplete(updateCompleteNotes);
    note.complete = false;
    setNotes([
      {id:currentNote.id, content:currentNote.content, complete:false},
      ...notes
    ])
    setTimeout(() => {
      setScreen('todo');
    }, 500);
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={note.complete}
        onChange={() => quitCompleteNote(note) }
      />
      <label> {note.content} </label>
    </div>
  )
}

export default NoteComplete;
