import React, { useState, useEffect } from 'react';
import Complete from './pages/Complete';
import Container from './components/Container';
import Header from './components/Header';
import Todo from './pages/Todo';

const App = () => {
  const [screen, setScreen] = useState('todo');
  const [notesComplete, setNotesComplete] = useState([]);
  const [notes, setNotes] = useState([]);
  
  const saveData = (notes, notesComplete) => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('notesComplete', JSON.stringify(notesComplete));
  }

  const getData = () => {
    setNotes( JSON.parse( localStorage.getItem('notes')));
    setNotesComplete(JSON.parse(localStorage.getItem('notesComplete')))
  }
  
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    saveData(notes, notesComplete);
  },[notes, notesComplete]);
  
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
            notes = {notes}
            setNotes = {setNotes}
            notesComplete={notesComplete}
            setNotesComplete={setNotesComplete}
            setScreen={setScreen}
          />
        )
      }
    </Container>
  );
}

export default App;
