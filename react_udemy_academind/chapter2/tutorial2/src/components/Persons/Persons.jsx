import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return <Person
             click={() => props.clicked(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             nameChangeEvent={(event) => props.changed(event, person.id)}/>
         })
    );
};

// can also be simply written without the return statement because it is a executing just one statement 
// split to multiple lines:

// const persons = (props) => 
//         props.persons.map((person, index) => {
//             return <Person
//              click={() => props.clicked(index)}
//              name={person.name}
//              age={person.age}
//              key={person.id}
//              nameChangeEvent={(event) => props.changed(event, person.id)}/>
//          });

export default persons;