import React from 'react';
import './Person.css';
import Radium from 'radium';


const person = (props) =>{
    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }

    return (<div className='Person' style={style}> 
        <p>I am {props.name} and I am {props.age} years old{props.children}. <button onClick={props.click}>Delete Me</button></p>
        <input type="text" value={props.name} onChange={props.nameChangeEvent}/>

    </div>

    )
};

export default Radium(person);