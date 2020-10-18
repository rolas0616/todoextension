import React from 'react';
import '../styles/Header.css';

const Header = ({
  setScreen
}) => {
  return (
    <div className="flex">
      <button
        className="header"
        onClick={ () => setScreen('todo') }
      >
        Todo
      </button>
      <button
        className="header"
        onClick={ () => setScreen('complete') }
      >
        Complete
      </button>
    </div>
  )
}

export default Header
