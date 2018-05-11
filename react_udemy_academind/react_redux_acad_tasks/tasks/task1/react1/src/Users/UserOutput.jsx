import React from 'react';
import '../App.css';


const UserOutput = (props) =>{
    return(
        <div>
            <p>username: {props.username}</p>
            <p>{props.children}</p>
        </div>
    )
}

export default UserOutput;