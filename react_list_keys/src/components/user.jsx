import React from 'react';

const User = (props) => (
    <li>
        <span>Name:{props.children}</span>
        | Age: {props.age}

        <input onChange={props.changeEvent} value={props.children} type="text"/>
        <button onClick={props.delEvent}> Delete</button>
    </li>

)

export default User;