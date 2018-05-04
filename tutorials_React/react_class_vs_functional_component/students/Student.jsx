import React from 'react';

const Student = (props) => {
    let age = props.age
        ? props.age
        : "NA";

    return (props.children)
        ? (
            <div>name:{props.children}
                , Age: {age}, Location:{props.location}| Nationality : {props.nationality}</div>
        )
        : <div>Student Empty</div>

}

export default Student;