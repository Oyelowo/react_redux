import React, {Component} from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {
        id: '01',
        name: 'lowo',
        age: 23
      }, {
        id: '02',
        name: 'Sam',
        age: 25
      }, {
        id: '03',
        name: 'Sonja',
        age: 21
      }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  makeOlder = () =>{
    const AllPersons = [...this.state.persons];
    const updatedPersons =  AllPersons.map(el => {
     el.age++;
     return el
    })
    this.setState({persons: updatedPersons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this
      .state
      .persons
      .findIndex(p => {
        return p.id === id
      })

      //copy the object, so that the original is not mutated and then find the
      //person with that specific personIndex
    const person = {
      ...this.state.persons[personIndex]
    }

    // Alternative  const person = Object.assign({}, this.state.persons[personIndex]);
    
    // then change the name of the particular person to the input value of the target event
    person.name = event.target.value;

    // again, copy the original list of persons
    const persons = [...this.state.persons];

    // update the particular person which is being changed by assigning to corresponding index on the original list
    persons[personIndex] = person;

    //now, set the state to the newly altered list
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    // because arrays and objects are referenced (and not primitives like string,
    // numbers and booleans), when you only assign an array to a new variable, an
    // alteration in one can affect the other which might lead to unintended
    // consequences. therefore, I should use the slice method or  spread operator to
    // first copy the array to create an entirely new copy which will not affect
    // the original  in the course of alteration, as below where I splice elements
    // in the list use either the slice or spreat operator to copy the array Always
    // update state in immutable way const persons = this.state.persons.slice();
    // //this is an alternative
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    const style = {
      backgroundColor: '#333',
      color:'white',
      font: 'inherit',
      border: '1px solid: 01, blue',
      padding: '8px',
      cursor: 'pointer',

      ':hover': {
        backgroundColor : 'coral',
        color: 'black'
      } 
    };

    // create the persons variable
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this
            .state
            .persons
            .map((person, index) => {
              // can also use {this.deletePersonHandler.bind(this, index)} below
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                nameChangeEvent={(event) => this.nameChangeHandler(event, person.id)}/>
            })}

        </div>
      )
      style.backgroundColor = 'lavender';
      style.color = 'black';
      // style['backgroundColor'] = 'red';

      style[':hover'] = {
        backgroundColor : 'lightgreen',
        color: 'black'
      } 
    }

// this can be done manually but this is done for dynamism
    const classesP = [];

    if(this.state.persons.length <=2){
      classesP.push('red'); //classes =['red']
    }
    if(this.state.persons.length <=1){
      classesP.push('bold'); //classes =['red', 'bold']
    }


    return (
      <div className="App">
        <h1>Let's make this work</h1>
        <p className={classesP.join(' ')}>This is really working</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        <br/>
        <br/>
        <button onClick={this.makeOlder}>make older</button>

        {persons}
      </div>
    );
  }
}

//Radium(App) : higher order component injecting more function. can also be used on functional component
export default Radium(App);
