import React from 'react'

const Container = ({
  children
}) => {
  return (
    <div style={{ backgroundColor:'#f1f1f1', width:'500px', height:'500px' }}>
      {children}
    </div>
  )
}

export default Container;
