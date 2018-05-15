import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
     // this can be done manually but this is done for dynamism
     const classesP = [];

     let btnClass ='';
     if(props.showPersons){
        btnClass = classes.Red;
     }

     if (props.persons.length <= 2) {
       classesP.push(classes.red); //classes =['red']
     }
     if (props.persons.length <= 1) {
       classesP.push(classes.bold); //classes =['red', 'bold']
     }
 

    return (
        <div className={classes.Cockpit}>
            <h1>Let's make this work</h1>
            <p className={classesP.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clickToggle}>Toggle Persons</button>
            <br/>
            <br/>
            <button onClick={props.clickMakeOlder}>make us older</button>
            <s></s>
            <button onClick={props.clickMakeYounger}>Make Younger</button>
        </div>
    )
}

export default cockpit;
