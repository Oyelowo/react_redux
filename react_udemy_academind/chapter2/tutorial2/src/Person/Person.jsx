import React from 'react';
import './Person.css';
// import Radium from 'radium';


const person = (props) =>{

    return (<div className='Person'> 
        <p>I am {props.name} and I am {props.age} years old{props.children}. <button onClick={props.click}>Delete Me</button></p>
        <input type="text" value={props.name} onChange={props.nameChangeEvent}/>

    </div>

    )
};

export default person;