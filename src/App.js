import React, { useState } from 'react';
import Complete from './pages/Complete';
import Container from './components/Container';
import Header from './components/Header';
import Todo from './pages/Todo';

const App = () => {
  const [screen, setScreen] = useState('todo');
  return (
    <Container>
      <Header
        setScreen={setScreen}
      />
      {
        screen === 'todo' ? <Todo/> : <Complete/>
      }
    </Container>
  );
}

export default App;
