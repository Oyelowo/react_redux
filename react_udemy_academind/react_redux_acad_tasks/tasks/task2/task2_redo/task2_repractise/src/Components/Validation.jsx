import React from 'react';

const Validation = (props) => {
    let validationText = "Text too long";
    if(props.textLength===0){
        validationText='';
    }
    else if(props.textLength <= 5){
        validationText = 'Text too short!';
    } else if(props.textLength <=10){
        validationText="Text length all right, mate!!!!";
    }

  return (
    <div>
      <p>{props.textLength}</p>

      <p>{validationText}</p>
    </div>
  )
}

export default Validation;

