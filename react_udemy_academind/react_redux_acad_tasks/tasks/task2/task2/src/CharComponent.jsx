import React from 'react';

const CharComponent = (props) => {
    const compStyle = {
        display :'inline-block',
        padding : '16px',
        textAlign : 'center',
        margin: '16px',
        border: '1px solid black'
    }
  return (
    <div style={compStyle} onClick={props.clicked}>
    {props.character}
      
    </div>
  )
}

export default CharComponent;

