import React from 'react';

const ValidationComponent = (props) => {
    let validationMessage = 'Text Too Long';

    if (props.userInputLength <= 5) {
        validationMessage = 'Text too Short!'
    } else if(props.userInputLength <= 10){
        validationMessage = 'Text length all right now!'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    );

}

export default ValidationComponent;
