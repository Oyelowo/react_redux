import React from 'react';
import classes from './Cockpit.css'
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    // this can be done manually but this is done for dynamism
    const classesP = [];

    let btnClass = classes.Button;
    if (props.showPersons) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        classesP.push(classes.red); //classes =['red']
    }
    if (props.persons.length <= 1) {
        classesP.push(classes.bold); //classes =['red', 'bold']
    }

    
    return (
        <Aux>
            <h1>{props.appTitle}</h1>
            <p className={classesP.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clickToggle}>Toggle Persons</button>
            <br/>
            <br/>
            <button onClick={props.clickMakeYounger}>Make Younger</button>
            &nbsp; &nbsp;
            <button onClick={props.clickMakeOlder}>make us older</button>
        </Aux>
    )
}

export default cockpit;
