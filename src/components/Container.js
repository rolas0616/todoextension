import React from 'react'

const Container = ({
  children
}) => {
  return (
    <div style={{ backgroundColor:'#f1f1f1', width:'350px', height:'400px' }}>
      {children}
    </div>
  )
}

export default Container;
