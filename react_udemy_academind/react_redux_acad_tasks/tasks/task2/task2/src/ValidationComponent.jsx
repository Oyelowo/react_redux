import React from 'react';

const ValidationComponent = (props) => {
    let validationMessage = 'Text Too Long';

    if (props.textLength <= 5) {
        validationMessage = 'Text too Short!'
    } else if(props.textLength <= 10){
        validationMessage = 'Text length all right now!'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );

}

export default ValidationComponent;
