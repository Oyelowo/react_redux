import React from 'react';

const User = (props) => (
    <li>
        <span>Name:{props.children}</span>
        | Age: {props.age}
        <button onClick={props.delEvent}> Delete</button>
    </li>

)

export default User;