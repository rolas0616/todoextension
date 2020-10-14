import React from 'react'

const Header = ({
  setScreen
}) => {
  return (
    <div>
      <button 
        onClick={ () => setScreen('todo') }
      >
        Todo
      </button>
      <button 
        onClick={ () => setScreen('complete') }
      >
        Complete
      </button>
    </div>
  )
}

export default Header
