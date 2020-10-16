import React, { useState } from 'react';
import Complete from './pages/Complete';
import Container from './components/Container';
import Header from './components/Header';
import Todo from './pages/Todo';

const App = () => {
  const [screen, setScreen] = useState('todo');
  const [notesComplete, setNotesComplete] = useState([]);
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
    <Container>
      <Header
        setScreen={setScreen}
      />
      {
        screen === 'todo' ? (
          <Todo
            notes = {notes}
            setNotes = {setNotes}
            notesComplete = {notesComplete}
            setNotesComplete = {setNotesComplete}
          />
        ) :(
          <Complete
            notesComplete={notesComplete}
            setNotesComplete={setNotesComplete}
          />
        )
      }
    </Container>
  );
}

export default App;
