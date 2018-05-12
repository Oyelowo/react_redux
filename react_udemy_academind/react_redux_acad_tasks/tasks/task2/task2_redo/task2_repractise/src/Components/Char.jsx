import React from 'react';

const Char = (props) => {
const compStyle = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px dotted blue',
    pointer: 'cursor',
    cursor: 'pointer'
}

  return (
    <div onClick={props.clickDel} style={compStyle}>
      {props.char}
    </div>
  )
}

export default Char;
